const marriageGlobalPattern = /\{\{Marriage\|([^\}\}]+)\}\}/g;
const marriagePattern = /\[\[([^|]+)\]\]\|(.*)\}\}/;

module.exports = {
  globalPattern: marriageGlobalPattern,
  parsePattern: marriagePattern,
  parse: results => {
    const [, who, married] = results;
    return {
      who,
      married,
    };
  },
  variable: 'MARRIAGE',
  name: 'marriages',
};
