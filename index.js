import map from "unist-util-map";
import ABCJS from "abcjs";

export default () => (tree) => {
  return map(tree, (node) => {
    if (node.type === "code" && node.lang === "abc") {
      const abcOutput = ABCJS.renderAbc(null, node.value, { returnString: true });

      return {
        type: "abc",
        value: node.value,
        data: {
          hName: "div",
          hProperties: {
            className: ["abcjsContainer"],
          },
          hChildren: [
            {
              type: "text",
              value: abcOutput,
            },
          ],
        },
      };
    } else {
      return node;
    }
  });
};
