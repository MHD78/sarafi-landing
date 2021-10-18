class Assets{
    constructor(icon,name,logo,sell,buy,diffrence){
        this.icon = icon;
        this.name = name;
        this.logo = logo;
        this.sell = sell;
        this.buy = buy;
        this.diffrence = diffrence;
    }
}

class Instance{
    data = [new Assets("https://sarafi.io/img/coins/svg/btc.svg",'بیت کوین','BTC','1,563,723,823','1,504,885,416','8.428%'),
            new Assets('https://sarafi.io/img/coins/svg/eth.svg','اتریوم','ETH','102,584,764','99,230,630','-0.346%'),
            new Assets('https://sarafi.io/img/coins/svg/ada.svg','کاردانو','ADA','64,129','62,020','-1.831%'),
            new Assets('https://sarafi.io/img/coins/svg/bnb.svg','کوین‌ بایننس','BNB','11,980,457','11,588,786','-4.189%'),
            new Assets('https://sarafi.io/img/coins/svg/usdt.svg','تتر','USDT','28,224','27,748','0%'),
            // new Assets('https://sarafi.io/img/coins/svg/sol.svg','سولانا','SOL','4,493,597','4,351,303','-0.841%'),
            new Assets('https://sarafi.io/img/coins/svg/xrp.svg','ریپل','XPR','30,371','29,382','-1.759%'),
            new Assets('https://sarafi.io/img/coins/svg/doge.svg','دوج کوین','DOGE','6,968','6,736','-1.569%'),
            new Assets('https://sarafi.io/img/coins/svg/dot.svg','پولکادات','DOT','958,949','927,543','-1.578%'),
            new Assets('https://sarafi.io/img/coins/svg/bch.svg','بیت کوین کش','BCH','17,166,581','16,606,554','-2.142%'),
        ];
    wraper(){
        for(const asst of this.data){
            MainRender.render(asst);
        }
    }    
    
}

class MainRender{
    static render(item){
        const table = document.getElementById('tbl');
        const tmpl = document.getElementById('tmpl');
        const templateBody = document.importNode(tmpl.content,true);
        const tr = templateBody.querySelector('tr');
        const fTD = tr.querySelectorAll('td');
        fTD[0].querySelector('img').src = `${item.icon}`;
        fTD[0].querySelector('span').innerText = item.name;
        fTD[0].lastElementChild.innerText = item.logo;
        fTD[1].innerText = item.sell;
        fTD[2].innerText = item.buy;
        fTD[3].innerText = item.diffrence;
        if (item.diffrence.includes('-')){
            fTD[3].style.color = 'tomato';
        } else {
            fTD[3].style.color = 'lightgreen';
        }
        table.append(templateBody);
    }
}

const run = new Instance();
run.wraper();