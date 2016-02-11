"use strict"
require('./styles.css');
require('../components/necolas/normalize.css/3.0.3/normalize.css');
import Desk from './desk/desk.babel.js';

var desk = {
  width: '143rem',
  height: '91rem',
  rules: {
    maxfip: 2,
    maxTIP: 4,
    limitedCols: ['in_progress', 'test_to_do'],
    limitedRows: ['feature1', 'feature2'],
    allowTip(rowId, colId) {
      return colId != 'in_progress' || this.limitedRows.indexOf(rowId) == -1 || this.calculateTIP() < this.maxTIP;
    },
    allowHot(rowId, colId) {
      return colId == 'hot' || colId != 'in_progress' || desk.rows['hot']['slips']['to_do'].length == 0;
    },
    calculateTIP() {
      let TIP = 0;

      this.limitedRows.forEach((row) =>{
        this.limitedCols.forEach((col) =>{
          TIP += desk[row]['slips'][col].length;
        });
      });

      return TIP;
    }
  },
  columns: {
    feature: {
      name: 'Feature',
      width: '13rem',
      actions: {
        create: true
      }
    },
    to_do: {
      name: 'To Do',
      width: '39rem',
      actions: {
        create: true,
        move_to: ['in_progress']
      }
    },
    in_progress: {
      name: 'In Progress',
      width: '26rem',
      actions: {
        move_to: ['to_do', 'test_to_do']
      }
    },
    test_to_do: {
      name: 'Test To Do',
      width: '26rem',
      actions: {
        move_to: ['test_in_progress']
      }
    },
    test_in_progress: {
      name: 'Test In Progress',
      width: '13rem',
      actions: {
        move_to: ['to_do', 'done']
      }
    },
    done: {
      name: 'Done',
      width: '13rem',
      actions: {
        move_to: ['deployed']
      }
    },
    deployed: {
      name: 'Deployed',
      width: '13rem'
    }
  },
  rows: {
    hot: {
      height: '13rem',
      slips: {
        to_do: [{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        }],
        in_progress: [],
        test_to_do: [],
        test_in_progress: [],
        done: [],
        deployed: []
      }
    },
    feature1: {
      height: '26rem',
      slips: {
        to_do: [{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },],
        in_progress: [],
        test_to_do: [],
        test_in_progress: [],
        done: [],
        deployed: []
      }
    },
    feature2: {
      height: '26rem',
      slips: {
        to_do: [{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },{
          text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что консультация с широким активом требуют от нас анализа новых предложений. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
        },],
        in_progress: [],
        test_to_do: [],
        test_in_progress: [],
        done: [],
        deployed: []
      }
    },
    bugs: {
      height: '26rem',
      slips: {
        to_do: [],
        in_progress: [],
        test_to_do: [],
        test_in_progress: [],
        done: [],
        deployed: []
      }
    }
  }
};
new Desk(document.body, desk);


var W3CWebSocket = WebSocket;

window.client = new W3CWebSocket('ws://localhost:8080/', 'echo-protocol');

client.onerror = function() {
    console.log('Connection Error');
};

client.onopen = function() {
    console.log('WebSocket Client Connected');
};

client.onclose = function() {
    console.log('echo-protocol Client Closed');
};

client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'");
    }
};
