

export default [
  { id: 0, parents: [], currentLevel: 2, imageUrl: 'wrongdata', maxLevel: 8 },
  { id: 7, parents: [5], imageUrl: 'https://www.mobafire.com/images/ability/caitlyn-90-caliber-net.png', label: 'Some Label' },
  { id: 2, parents: [6], imageUrl: 'https://www.mobafire.com/images/ability/caitlyn-headshot.png', links: ["http://www.google.com"], description: 'Valamijksahdjkasdhaskjldhaskdljhsaldkajwhdwaukdhawhdsa jh asuda khhdwdhaw ukdhawu dkhaslhsa' },
  { id: 3, parents: [2], imageUrl: 'https://www.mobafire.com/images/ability/caitlyn-piltover-peacemaker.png', links: ["http://www.google.com", "http://www.gitlab.com"], description: 'Valami' },
  { id: 5, parents: [2], imageUrl: 'https://www.mobafire.com/images/ability/caitlyn-yordle-snap-trap.png' },
  { id: 6, parents: [], imageUrl: 'https://www.mobafire.com/images/ability/caitlyn-ace-in-the-hole.png' },
  { id: 8, parents: [3], imageUrl: 'https://www.mobafire.com/images/ability/jayce-acceleration-gate.png' },
  { id: 9, parents: [0, 6], label: 'ez', parentNodesLevel: [{ minimumLevel: 3, parentId: 0 }], imageUrl: 'https://www.mobafire.com/images/ability/jayce-hextech-capacitor.png' },
  { id: 10, parents: [5], imageUrl: 'https://www.mobafire.com/images/ability/jayce-lightning-field-hyper-charge.png' },
  { id: 12, parents: [10, 7], imageUrl: 'https://www.mobafire.com/images/ability/jayce-to-the-skies-shock-blast.png' },
  { id: 13, parents: [8, 7] }
]
