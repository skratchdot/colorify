import readmeText from '../../README.md';
import marked from 'marked';

const linkIndexStart = /\n## Other Links/.exec(readmeText).index;
const linkIndexEnd = /\n## License/.exec(readmeText).index;
const main = marked(
  readmeText.slice(0, linkIndexStart) + readmeText.slice(linkIndexEnd)
);
const links = marked(readmeText.slice(linkIndexStart, linkIndexEnd));

export { main, links };
