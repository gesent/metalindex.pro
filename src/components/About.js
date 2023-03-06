//import React from 'react';

const About = (props) => {
  return (
    
    <div className='About'>
      <span className = {window.cLang === 'US'? "US langActive": "US"}> Our site is designed to improve the efficiency of the work of supply specialists in the field of rolled metal products and pipe products, as well as to expand the horizons in this area for ordinary people. The presented information does not carry an advertising connotation, but is a purely informative part of studying the rolled metal market in the world. Our ambitious task is to generate data and develop into a platform for strengthening trade and partnerships between manufacturers, suppliers and end users of materials and equipment.</span>
      
      <span className = {window.cLang === 'RU'? "RU langActive": "RU"}>Наш сайт разработан для улучшения эффективности работы специалистов снабжения в сфере металлопроката и трубной продукции, так же как и расширение кругозора в данной сфере простым обывателям. Представленная информация не несет рекламный подтекст, а является сугубо информативной частью изучения рынка металлопроката в мире. Наша амбициозная задача, сгенерировать данные и перерасти в площадку для укрепления торговых и партнерских отношений производителей, поставщиков с конечными потребителями МТР. </span>
      
      <span  className = {window.cLang === 'UZ'? "UZ langActive": "UZ"}>Saytimiz metall prokat va quvur mahsulotlari sohasida ta'minot bo'yicha mutaxassislarning ish samaradorligini oshirish, shuningdek, oddiy odamlar uchun ushbu sohadagi ufqlarni kengaytirish uchun mo'ljallangan. Taqdim etilgan ma'lumotlar reklama ma'nosiga ega emas, balki dunyodagi metall prokat bozorini o'rganishning sof ma'lumotli qismidir. Bizning ulkan vazifamiz ma'lumotlarni yaratish va ishlab chiqaruvchilar, etkazib beruvchilar va materiallar va uskunalarning oxirgi foydalanuvchilari o'rtasida savdo va hamkorlikni mustahkamlash uchun platformaga aylanishdir.</span>
</div>
  )
}

export default About
