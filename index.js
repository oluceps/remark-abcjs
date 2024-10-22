import { fromDom } from "hast-util-from-dom";
import map from "unist-util-map";
import { JSDOM } from "jsdom";
import ABCJS from "abcjs";

const remarkMusic = () => {
  return (tree, _) => {
    return map(tree, (node) => {
      if (node.type === "code" && node.lang === "abc") {
        const {
          window: { document },
        } = new JSDOM();

        const renderInto = document.createElement("div");
        renderInto.className = "abcjsContainer";
        ABCJS.renderAbc(renderInto, node.value);
        const data = fromDom(renderInto);

        return {
          type: "abc",
          value: node.value,
          data: {
            hName: data.tagName,
            hProperties: data.properties,
            hChildren: data.children,
          },
        };
      } else {
        return node;
      }
    });
  };
};

export default remarkMusic;
