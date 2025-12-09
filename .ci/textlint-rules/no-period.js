/**
 * 句点（。）の使用を禁止するtextlintルールです
 */
module.exports = function (context) {
  const { Syntax, RuleError, report, getSource } = context;

  return {
    [Syntax.Str](node) {
      const text = getSource(node);
      const match = text.match(/。/);

      if (match) {
        report(
          node,
          new RuleError("句点（。）は使用しないでください", {
            index: match.index,
          })
        );
      }
    },
  };
};
