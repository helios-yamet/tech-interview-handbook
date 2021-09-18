module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Preface',
      items: ['introduction', 'landscape'],
    },
    {
      type: 'category',
      label: 'Job Application',
      items: ['resume', 'resume-case-study', 'resume-sample', 'cover-letter'],
    },
    {
      type: 'category',
      label: 'Interview Process',
      items: [
        'interview-formats',
        'self-introduction',
        {
          type: 'category',
          label: 'Coding Round',
          items: [
            'coding-round-overview',
            'picking-a-language',
            'study-and-practice',
            'best-practice-questions',
            'during-coding-interview',
            'cheatsheet',
            'coding-signals',
            'mock-interviews',
            'interviewer-cheatsheet',
          ],
        },
        'system-design',
        {
          type: 'category',
          label: 'Behavioral Round',
          items: [
            'behavioral-round-overview',
            'star-format',
            'behavioral-questions',
            'psychological-tricks',
          ],
        },
        'questions-to-ask',
        {
          type: 'category',
          label: 'Post Interview',
          items: [
            'understanding-compensation',
            'negotiation',
            'engineering-levels',
            'team-selection',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Algorithms',
      items: [
        'algorithms/algorithms-introduction',
        'algorithms/array',
        'algorithms/binary',
        'algorithms/dynamic-programming',
        'algorithms/geometry',
        'algorithms/graph',
        'algorithms/hash-table',
        'algorithms/heap',
        'algorithms/interval',
        'algorithms/linked-list',
        'algorithms/math',
        'algorithms/matrix',
        'algorithms/oop',
        'algorithms/permutation',
        'algorithms/queue',
        'algorithms/recursion',
        'algorithms/sorting-searching',
        'algorithms/stack',
        'algorithms/string',
        'algorithms/tree',
        'algorithms/trie',
      ],
    },
  ],
};
