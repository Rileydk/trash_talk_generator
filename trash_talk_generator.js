const data = {
  engineer: {
    title: '工程師',
    task: ['加個按鈕', '加新功能', '切個版', '改一點 code']
  },
  designer: {
    title: '設計師',
    task: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計']
  },
  entrepreneur: {
    title: '創業家',
    task: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function randomDrawer(arr) {
  return Math.floor(Math.random() * arr)
}

function generateTrashTalk(role) {
  if (role) {
    const taskIndex = randomDrawer(data[role].task.length)
    const phraseIndex = randomDrawer(phrase.length)
    return `${data[role].title}${data[role].task[taskIndex]}應該${phrase[phraseIndex]}吧！`
  } else {
    return `還沒選擇任何角色喔！`
  }
}

module.exports = generateTrashTalk
