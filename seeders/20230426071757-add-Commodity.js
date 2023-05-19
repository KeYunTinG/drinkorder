'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Commodities', [{
      name: '草莓派風味星冰樂',
      description: '帶有酥脆草莓餅乾碎片的粉紅星冰樂，盡情享受草莓果香的甜美口感，擠上奶油和草莓碎片，在口中享受草莓派的迷人風味！',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/73584619.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '香草風味星冰樂',
      description: '清新的香草風味搭配鮮奶調製，帶來沁涼感受。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/25893527.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '摩卡可可碎片星冰樂',
      description: '結合星巴克咖啡、鮮奶、摩卡醬及可可碎片，透過摩卡醬裝飾，展現出多層次口感及濃郁巧克力風味，獨具魅力。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/25893528.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '焦糖可可碎片星冰樂',
      description: '融合了星巴克咖啡、鮮奶、焦糖風味糖漿及可可碎片，搭配甜美焦糖醬，香甜細緻的風味與多層次口感，深獲喜愛。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/22541602.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '巧克力可可碎片星冰樂',
      description: '以摩卡醬、鮮奶及可可碎片調製，透過摩卡醬裝飾，展現出濃厚的巧克力風味及多重口感，深獲喜愛。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/22541610.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '雙果果汁星冰樂',
      description: '融合芒果及百香果雙重水果風味，喝來清爽又洋溢熱情。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/25893529.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '醇濃抹茶星冰樂',
      description: '使用精心臻選，品質優良的日本純抹茶，精緻研磨成無糖醇濃抹茶粉，加入乳品調製成美味的星冰樂，在杯中濃郁雅致的茶香氣息與綿密口感。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/49725183.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '鹹焦糖風味可可瑪奇朵',
      description: '經典濃縮咖啡搭配鹹焦糖風味，融合焦糖鹹甜香氣與奶香，為咖啡愛好者帶來優質的咖啡體驗。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/77655021.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '可可瑪奇朵',
      description: '第一口綿密香醇的奶泡混合著香甜可可的糖醬滋味，搭配經典義式濃縮咖啡，層次堆疊滿足味蕾的享受。感受猶如奶油般柔滑口感及細緻可可香氣。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/34705733.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '焦糖瑪奇朵',
      description: '融合優質鮮奶及香草風味糖漿後，倒入濃縮咖啡並在牛奶上覆以香甜焦糖醬，呈現多層次風味，是星巴克深受歡迎的飲料。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/12811129.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '馥列白',
      description: '款咖啡源由自與亞洲相鄰，精品咖啡文化紮實的澳洲，在濃縮咖啡與牛奶的比例上，選擇使用較多份的ristretto shots (短濃縮)增加咖啡濃醇度的同時並凸顯咖啡甜感。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/12811383.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '特選馥郁那堤',
      description: '精心為您挑選來自不同產區的濃縮咖啡，搭配新鮮的優質鮮奶，帶給您多元的牛奶咖啡風味。飲品製作皆約九分滿，乳製品去奶泡。若需糖包，請勾選「需要調味佐料」。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/12813386.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '美式咖啡',
      description: '以歐洲方式調製，帶來濃郁豐富的咖啡滋味。飲品製作皆約九分滿。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/12816815.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '那堤',
      description: '濃郁醇厚的濃縮咖啡，搭配新鮮的優質鮮奶。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/12819750.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '香草風味那堤',
      description: '濃郁醇厚的濃縮咖啡, 融合優質鮮奶及香草風味糖漿後, 完成一杯風味豐富的牛奶咖啡。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/12838592.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '榛果風味那堤',
      description: '濃郁醇厚的濃縮咖啡, 融合優質鮮奶及榛果風味糖漿後, 完成一杯風味豐富的牛奶咖啡。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/12862342.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '摩卡',
      description: '由濃縮咖啡、摩卡醬及優質鮮奶調製，帶來香濃的巧克力及咖啡風味。',
      logo_path: 'https://images.deliveryhero.io/image/fd-tw/Products/12863589.jpg?width=%s',
      created_at: new Date(),
      updated_at: new Date(),
    }], {})
  },
  down: async (queryInterface, Sequelize) => { // 清空資料表中所有資料
    await queryInterface.bulkDelete('Commodities', {})
  }
};
