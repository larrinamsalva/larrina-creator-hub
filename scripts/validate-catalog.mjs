// Verify the Creative Universe catalog without network requests or dependencies.
// Public cards should open a game/app/music page, not the source repository.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const sandbox = { window: {} };
vm.runInNewContext(readFileSync(new URL('../projects.js', import.meta.url), 'utf8'), sandbox, { timeout: 1500 });
const projects = sandbox.window.LARRINA_PROJECTS;
assert.ok(Array.isArray(projects) && projects.length >= 15, 'Existing cards and new projects must remain');
assert.equal(new Set(projects.map(p => p.id)).size, projects.length, 'Project IDs must be unique');
const categories = new Set(['games', 'apps', 'music', 'creative']);
for (const item of projects) {
  assert.ok(typeof item.id === 'string' && item.id, 'Project requires a stable ID');
  assert.ok(typeof item.name === 'string' && item.name, item.id + ' needs a name');
  assert.ok(categories.has(item.category), item.id + ' has a supported category');
  assert.ok(item.description && item.action, item.id + ' needs copy and an action label');
  assert.ok(item.status === 'public' || item.status === 'local' || item.status === 'source', item.id + ' has a valid status');
  if (item.status === 'local') {
    assert.equal(item.href, '', item.id + ' is local-only and must not show a fake launch link');
    assert.ok(item.sourceHref?.startsWith('https://github.com/'), item.id + ' must have setup source');
    if (item.setupHref) {
      const guide = new URL(item.setupHref);
      assert.equal(guide.protocol, 'https:', item.id + ' setup guide uses HTTPS');
      assert.equal(guide.hostname, 'github.com', item.id + ' setup guide must be from the project's repository');
      assert.equal(guide.pathname, new URL(item.sourceHref).pathname, item.id + ' setup guide must belong to its project');
    }
  } else {
    const dest = new URL(item.href);
    assert.equal(dest.protocol, 'https:', item.id + ' must use HTTPS');
    if (item.status === 'public') {
      assert.notEqual(dest.hostname, 'github.com', item.id + ' must launch the app, not GitHub');
      assert.notEqual(dest.hostname, 'www.github.com', item.id + ' must launch the app, not GitHub');
    }
  }
  if (item.sourceHref) {
    assert.equal(new URL(item.sourceHref).hostname, 'github.com', item.id + ' source should be GitHub');
  }
}
const byId = Object.fromEntries(projects.map(p => [p.id,p]));
assert.equal(byId['dino-trails'].href, 'https://larrinamsalva.github.io/larriverse-arcade/games/dino-discovery-world/explore.html');
assert.equal(byId['forgeos-property'].href, 'https://forgeos-property-manager-staging.vercel.app/demo');
assert.equal(byId['lms-business'].status, 'local');
assert.equal(byId['lms-business'].setupHref, 'https://github.com/larrinamsalva/LMS#run-the-fictional-demo-locally');
assert.equal(byId['lms-business'].action, 'Open LMS setup guide');
assert.equal(byId['chiptoons'].href, 'https://larrinamsalva.github.io/ChipToons/');
assert.equal(byId['dino-discovery'].href, 'https://larrinamsalva.github.io/larriverse-arcade/games/dino-discovery-world/');
const appCode = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
assert.ok(appCode.includes('if (project.href)') && appCode.includes('card-unavailable'),
  'Cards without hosted links must show a truthful local-only notice');
assert.ok(appCode.includes("project.status === 'local' && project.setupHref") && appCode.includes('GitHub instructions, not a live app'),
  'Local-only cards present a prominent link to their setup instructions without pretending to be hosted');
assert.ok(appCode.includes('project.href && project.status !== \'source\''),
  'Surprise Me must avoid local-only and source-only destinations');
console.log('Creator Hub catalog validated: ' + projects.length + ' unique cards, working launch-link structure, honest local-only status.');
