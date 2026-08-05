export type Essay = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  position: number;
  description: string;
  body: string[];
};

export const essays = [
  {
    slug: 'dusunceler',
    title: 'Düşünceler',
    date: '2025-01-18',
    displayDate: '18 Ocak 2025',
    position: 1,
    description:
      'Bir düşüncenin nerede başladığı, neye dönüşebileceği ve eyleme geçmediğinde geride ne bıraktığı üzerine.',
    body: [
      '- Kaldığımız yeri bana hatırlatabilir misin?',
      '- Düşünceler, en son burada kalmıştık diye hatırlıyorum.',
      '- Evet, o zaman bugün de biraz düşünceler hakkında konuşalım. Düşünce denince aklına ilk gelen şey nedir?',
      '- İlk aklıma gelen şey Yaratım oldu.',
      '- Çok güzel. Peki neden Yaratım?',
      "- Çünkü bana kalırsa her şeyin başlangıç noktasında bir düşünce vardır. Adem ile Havva'yı cennetten kovduranın bir düşünce olması gibi, karnabaharın yetiştirilmesinin, tekerleğin ve hatta şu anda bu konuşmamızı kaydeden kayıt cihazının icatlarının da ilk adımının yalnızca birer düşünce olduğuna inanıyorum.",
      "- Kesinlikle. Peki bu durumda Adem ile Havva'yı cennetten kovdurabildiğine göre, düşüncelerin aynı zamanda tehlikeli olduklarını da söyleyebilir miyiz?",
      '- Evet. Nietzsche tek bir düşüncenin bile bizi parçalara ayırıp dönüştürebileceğini söylemişti hatırlarsın. Eğer bu dönüşümü doğru bir şekilde gerçekleştiremezsek gerçekten yıkıcı sonuçlar doğurabilir ve burada sadece kişinin kendine yapabileceklerinden bahsediyoruz. Peki senin görüşün nedir?',
      '- Bende aynı şekilde düşünüyorum. Düşünceleri yaratım için kullanabileceğimiz gibi aynı zamanda yok etmek için de kullanabiliriz. Örneğin nükleer en önemli enerji kaynaklarından biriyken, kötü düşünceler içerisinde bir bombaya dönüşebiliyor. Veya Hitler Alman halkının yalnızca saf ırk olmaları durumunda güçlü olacağını düşünmeseydi Holokost yaşanır mıydı? Son bir örnek olarak da hadi biraz daha kişisel bir şey olsun; hatırlasana, o ilk işini almanı sağlayan şey peşinden koştuğun küçük bir düşünce yumağı değil miydi?',
      '- Evet, çok doğru. Ne günlerdi ama. Peki ya düşünce denince senin aklına ilk gelen şey nedir?',
      '- Sanırım ben bu soruya tohum yanıtını verirdim. Çünkü eylem ile desteklenmediği sürece, yani bir tohum olarak düşünürsek eğer, sen bu tohumun filizlenmesi için uygun şartları oluşturmadığın, suyuna, toprağına özenmediğin sürece bu yalnızca bir tohum olarak kalacak ve sonunda ölüp gidecek. Ayrıca her tohumun filiz vermediği gibi her düşüncenin de filiz veremeyeceğini unutmamak gerekiyor.',
      '- Bunu daha iyi bir şekilde örnekleyemezdim sanırım. Peki sıradaki konumuz nedir?',
      '- Hazır ölüm demişken, belki bir sonraki sohbetimizin konusu ölüm ve yaşam hakkında olur, ne dersin?',
      '- Bu harika bir fikir. Bir sonraki sohbetimiz için sabırsızlanıyorum.',
    ],
  },
  {
    slug: 'olum-ve-yasam',
    title: 'Ölüm ve Yaşam',
    date: '2025-01-20',
    displayDate: '20 Ocak 2025',
    position: 2,
    description:
      'Ölüm fikrinin insanı nasıl esirgeyebildiği; yaratmak, hizmet etmek ve kendini gerçekleştirmek üzerine.',
    body: [
      '- Evet, nerede kalmıştık?',
      '- Ölüm ve Yaşam',
      '- Doğru. "Fiziksel ölüm bizi yok etse de ölüm fikri bizi esirger." Bu cümle üzerinde düşünmeni isteseydim ne söylerdin?',
      "- Bir bakalım, öldüğümüzde elbette öleceğiz evet ama ölümlü olduğumuz gerçeğinin aslında özgürleştirici olduğunu söylerdim, yani şöyle; Ölümlü olduğumuzun gerçek anlamda farkındalığına varmak bizi geçmişle ilgili pişmanlıklarımızdan ve gelecekle ilgili kaygılarımızdan korur ve içinde bulunduğumuz an'ın tadına varabilmemizi sağlar. ",
      '- Yani ölümlü olduğumuzun bilincinde olmanın bizi pişmanlıklardan ve kaygılardan özgür kılacağını söylüyorsun, doğru mu anladım? Başka?',
      '- Sanırım benden bu kadar, peki sen ne söylerdin?',
      '- Ben ölüm fikrinin esirgeyiciliğini tırtılın ördüğü kozaya benzetirdim. Ölümlü olduğumuzun gerçek anlamda bilincine varmanın, insana, tırtılın kozada geçirdiği metamorfoza benzer bir dönüşüm geçirttiğini düşünüyorum. Bu dönüşümün sonunda insan tıpkı bir kelebek gibi özgürlüğüne uçmaya hazır hâle geliyor.',
      '- Çok güzel! Peki ya ölüm kaygısı? İnsanlar neden ölmekten bu kadar çok korkuyorlar sence?',
      '- Bu konuda Schopenhauer\'ı hatırlayalım, "Ölüm kaygısı, kendini gerçekleştirmenin en çok olduğu yerde en az bulunur" demişti. Müsaadenle ben bu cümleyi şu şekilde değiştirmek istiyorum: "Ölmekten en çok korkanlar aynı zamanda yaşamaktan en çok korkanlardır." Peki senin için kendini gerçekleştirme ne ifade ediyor?',
      "- Yaratım ve özgecilik sanırım. İnsan yarattığı ve özgeci olduğu ölçüde kendini gerçekleştirmiştir. Montaigne'i hatırlarsak eğer, başkasına yardım eden insanın aslında kendine yardım ettiğini, yardım gören insanın ise, borçlunun alacaklısına duyduğu duyguları beslediğini söylüyordu.",
      '- Güzel bir yaklaşım. Peki ya yaratım?',
      '- En çok tüketen insanın aynı zamanda en çabuk tükenecek olan insan olduğuna inanıyorum. Biliyorsun ki insan beyninin yaradılışında sürekli devinim görmek var. Bundan binlerce yıl önce Marcus Aurelius üretken olmayan bireylerin doğanın düzenine karşı geldiklerini düşünüyordu. Ya da Rollo May yaratıcılığı insanın hem kendisiyle hemde dünyayla olan ilişkisinde yeni bir anlam yaratma şekli olarak görüyordu.',
      '- Peki ya yaratım tam olarak senin için ne anlam ifade ediyor? Yani bir insan ne yaparsa yaratmış oluyor?',
      "- Günlük hayattaki her türlü üretim (bir sorun çözmeden tutalım da basit bir düşünceye kadar) benim için yaratım anlamına geliyor. Bu üretim başka bir insana olumlu anlamda dokunduğu noktada da başka bir anlam ve boyut kazanıyor ve insanı varoluşsal anlamda tatmin etmeye başlıyor. Bu konuyu biraz daha uzaklardan bir örnek ile derinleştirmek istersek eğer; bir Hindu felsefi geleneği olan Vedanta'ya göre insan hizmet ederek egosunu aşar, sevgi ve birlik bilincini geliştirir. Bu yüzden de Vedanta'ya göre hizmet, insanın hem kendisi hemde dünya için en yüksek idealdir. Aynı şekilde tüm dünya dinlerinin en yüksek ideallerinin de diğer insanlara karşılık beklemeden hizmet etmek olduğunu söyleyebiliriz.",
      '- Özgecilikle ilgili çok güzel bir örnek verdin. O zaman bir sonraki sohbetimizin konusunu seçtiğimizi söyleyebilir miyiz?',
      '- Kesinlikle, bakalım bu konu bizi nerelere sürükleyecek.',
    ],
  },
  {
    slug: 'ozgecilik',
    title: 'Özgecilik',
    date: '2025-01-22',
    displayDate: '22 Ocak 2025',
    position: 3,
    description: 'Vermek, kullanılmak, ego, saf özgecilik ihtimali ve insanın kendi doğasına dönmesi üzerine.',
    body: [
      '- En son özgeciliğin yalnızca başkalarına yardım değil, aynı zamanda insanın kendi varoluşsal tatminine katkı sağladığını söylemiştin. Peki özgeciliğin olumsuz yanları var mı?',
      '- Bu konuda verme dengesinin hassas bir şekilde kurulması gerektiğine inanıyorum. İnsan özgecilikle hareket ederken her ne olursa olsun -bu salt eylemin gerçekleştirilmesinden gelen haz bile olsa- bir karşılık alıyor olmalı.',
      '- Ama bu durumda özgeciliğin özüne -yani herhangi bir çıkar gözetmemeye- karşı gelmiş olmuyor muyuz?',
      '- Doğru, çok güzel bir noktaya değindin ama biliyorsun ki özgecilik insanın kendi kişisel gereksinimlerini bir kenara itip yalnızca başkalarının çıkarlarını sağlamak anlamına da gelmiyor.',
      '- Bu durumda David Sloan Wilson\'ın sorusunu tekrar gündeme getirebiliriz sanırım: "Özgecilik var mı yoksa insan doğası tamamen bencil mi?"',
      "- İlginç bir soru. Belki de gerçekten saf özgecilik tamamen bir yanılgı ya da yalnızca bir felsefedir. En nihayetinde başkalarına yardım etmenin oksitosin gibi iyi hissettiren nörotransmitter'lar üretebildiğini ve bu yüzden de bu tarz davranışların bağımlılık yapabileceğini biliyoruz. En son birine yardım ettiğinde nasıl hissettiğini hatırlıyor musun? Yoksa birilerinin sorunlarını çözmek yalnızca biz erkekler için mi keyif verici bir eylem?",
      '- Elbette hatırlıyorum ama tam olarak nasıl tarif edebileceğimden emin değilim. Aslında şöyle bir baktığımda kendimi gerçekleştirmiş olmaya en yakın hissettiğim anlar bu anlar ve hayır, yalnızca sizin için keyifli değil. Bu durumda verme dengesinin aslında yalnızca yüzeysel bir denge olduğundan bahsedebilir miyiz? Zira özgeci insanlar kendini gerçekleştirmiş hissetmeye en yakın insanlarsa eğer, gerçekten verme konusunda bir denge kurmayı, hatta kullanılıyor olmayı umursarlar mı?',
      "- Çok doğru, benim de kişisel deneyimlerimde böyle anlarım oldu. Ne kadar vermiş olduğumu umursamadığım, hatta karşımdakinin bu durumdan faydalandığını bildiğim durumlar. Ancak salt eylemin kendisi ödüllendirici olduğu için ego'nun sesi çoğu zaman baskın çıkamadı.",
      '- Peki böyle bir durumda neler hissettin? Egon sana neler söylüyordu?',
      '- Kaygılıydım. Egom bana kendi öz saygıma ihanet ettiğimi ve bundan dolayı pişmanlık duyacağımı söylüyordu. Ancak bir yandan da Marcus Aurelius\'un şu sözü hep kulağımdaydı: "Düşmanından öç almanın en iyi yolu, onun gibi davranmamaktır". Bu yüzden de -en azından konu özgecilik olduğunda- davranışlarımı karşımdakinin davranışlarıyla eşleştirmemem gerektiğini biliyordum ve bende içimden geldiği şekilde davrandım.',
      '- Bu örneğinle birlikte aslında verme dengesinin yalnızca yüzeysel olduğu fikrimi desteklemiş oldun. Hatırlarsan eğer bir kaç kitap sonra da Marcus Aurelius insanın iyilik etmekle kendi doğasına uygun olarak davranmış olacağını yazıyordu. Belkide bu şekilde davranarak yalnızca doğana uygun bir davranış sergiliyordun.',
      '- Evet hatırlıyorum, ve hatta yanılmıyorsam aynı düşüncede gözün gördüğü, ayakların yürüdüğü için nasıl ödül beklemiyorsa, aynı şekilde insanın da bir karşılık beklememesini, salt eylemin kendisinde ödülü bulması gerektiğini söylüyordu. Kim bilir, belki de öyle davranıyordum. Peki sence bu durumda insanın varoluşsal olarak doğası gereği özgeci bir varlık olduğunu söyleyebilir miyiz?',
      "- Mümkün. David Sloan Wilson'ın sorusunu tekrar düşünecek olursak, belki de saf özgecilik yoktur; çünkü görüyoruz ki her davranış bir şekilde bireyin kendi doğasına geri dönüyor. Burada önemli olan şey bu durumun özgeciliğin değerini azaltmıyor olması. Aksine, insana kendi doğasına uygun bir denge kurması gerektiğini öğretiyor. Peki sence insan doğası nelerden oluşuyor?",
      '- Bana kalırsa insan doğası devinim görmek, sevmek, sevilmek ve bitmeyen bir anlam arayışından ibaret. Bu dördüne birden sahip olan insan sayısının çok az olduğuna inanıyorum. Sen ne düşünüyorsun? ',
      '- Burada küçük bir virgül koyup kahve arasından sonra devam edelim mi? ',
      '- Tabii ki, ancak yalnızca kırk yıllık hatrı olması kaydıyla.',
    ],
  },
  {
    slug: 'insan-dogasi',
    title: 'İnsan Doğası',
    date: '2025-01-23',
    displayDate: '23 Ocak 2025',
    position: 4,
    description: 'Ikigai, fark edilmek, almayı öğrenmek ve insanı iyileştiren ilişkinin ne olduğu üzerine.',
    body: [
      "- En son sohbetimizde insan doğasının devinim görmek, sevmek, sevilmek ve sonsuz bir anlam arayışından ibaret olduğunu düşündüğünü söylemiş ve bu konudaki fikirlerimi sormuştun. Bu saydıkların bana Ikigai felsefesini hatırlattı.  Okinawa'lıların Ikigai felsefelerini incelediğimizde emekli olmadıklarını, sevdikleri işlerle meşgul olduklarını ve etraflarının sevdikleri insanlarla çevrili olduklarını biliyoruz. Ben yine de bu maddelere bir ekleme daha yapmak istiyorum. İnsan doğası gereği fark edilmek de ister. Hatırlarsan William James, bir insana verilebilecek en zalim cezanın -eğer fiziksel olarak mümkün olsaydı- diğer tüm insanlar tarafından fark edilmemek olacağını söylemişti. Ya da Rollo May sevginin zıttının nefret değil, kayıtsızlık olduğunu düşünüyordu. Kişisel bir örnek vermek gerekirse, toplantı yoğunluğundan başımı kaşıyamayacak ve hatta iş yapamayacak noktaya geldiğimde bunu fark edip bu konuda elinden gelen yardımı yapmaya çalışmıştın. Bu davranışının bende uyandırdığı duyguları kelimelerle ifade etmem zor.",
      '- Çok güzel bir örnek verdin. Saydıklarımın aslında bir noktada Ikigai felsefesinin temeli olduğunu daha önce fark etmemiştim. Belki de Washington Burnap da, yaşamdaki mutluluğun ana şartlarını yapacak bir şey, sevecek biri ve umut edecek bir şey olarak tanımlarken aslında Ikigai felsefesinin özünü anlatıyordu. Fark edilmeye gelirsek, sen toplantılarla ve bunların yarattığı sıkıntılarla boğuşurken kayıtsız kalmamın mümkün olamayacağını biliyorsun. En azından biraz olsun yükünü hafifletebildiysem ne mutlu bana. Bazen sevdiğimiz insanlar için yapabileceğimiz ya da yapmamız gereken tek şeyin bu olduğuna inanıyorum. Tabii bunu karşımızdakine hissettirmeyi başaramıyorsak bence tüm anlamını yitiriyor.',
      '- Kesinlikle. Burada vermenin yanında almayı bilmek de önemli. Biliyorsun ki kimi insanlar bazı olumsuz tecrübeleri ya da çocukluk travmaları yüzünden almaktan korkuyorlar ya da almayı hiç öğrenmemişler. Hatırlarsan bende benzer bir korkuya kapılmış ve sana ilişkimizde verdiğimden çok aldığımdan ve bu farkın giderek açılmaya başladığını düşündüğümden bahsetmiştim ve bu konu üzerinde çalışmaya başlamıştık ve bende o gün vermenin tek seçenek olamayacağını, bazen de almamız gerektiğini öğrenmiştim. Sen almakla ilgili neler düşünüyorsun?',
      '- Çok doğru. Charlie Mackesy,  Çocuk, Köstebek, Tilki ve At kitabında gerçek cesaretin yardım istemek olduğunu söylemişti. Bana bu konuyu ilk açtığında böyle hissettirdiğim için gerçekten üzülmüştüm ve benim de verme noktasında bir denge arayışına girmem gerekebileceğini düşünmüştüm. Neyse ki buradaki temel sorunun benim verme dengemden ziyade senin alma alışkanlığının olmaması olduğu ortaya çıkmıştı. Birlikte bu konu üzerinde çalışmaya başladıktan sonra bu kadar rahat ilerleyebilmemizin sebebinin karşılıklı ihtiyaçlarımızın farkına varabiliyor, varamadığımız noktalarda da açık iletişim kurarak bu konudaki düşünce ve hislerimizi doğrudan konuşabiliyor olmamız olduğuna inanıyorum. Bu kadar zorluklarla dolu ve cesaret isteyen bir şeyi bizim için kolaylaştıran şey belki de ilişkimiz olmuştur.',
      '- Daha iyi özetleyemezdim sanırım. Belki bizde Irvin Yalom\'un tespih ettiği ve aslında danışan ile terapist arasındaki ilişkiyi kasteden "ilişkidir iyileştiren" düşüncesinin dostluklar için de geçerli olabileceğini söyleyebiliriz.',
      '- Kesinlikle! Burada küçük bir virgül koyup bir sonraki sohbetimizde Dostluk konusunu irdelemeye ne dersin?',
      '- Kahveler senden. Hazırlarken bir yandan da gerçek dostluğu neyin belirlediği konusuna biraz kafa yor bakalım.',
    ],
  },
  {
    slug: 'dostluk',
    title: 'Dostluk',
    date: '2025-01-26',
    displayDate: '26 Ocak 2025',
    position: 5,
    description:
      'Gerçek dostluğun sadece iyi hissettirmek değil, bazen büyütmek, zorlamak ve yanında durmak olması üzerine.',
    body: [
      '- Kahveler hazır olduğuna göre, gerçek dostluğu neyin belirlediğine kafa yordun mu bakalım?',
      "- Evet ve buna tek bir yanıt verebilmenin çok zor olduğunu düşünüyorum. Mesela Cicero'ya göre dostluk, erdem sayesinde doğar ve yine erdem sayesinde korunur. Saygı ise dostluğun en büyük süsüdür. Yine ona göre bazen dostluklar öyle bir kadere katlanmak zorunda kalır ki, bundan kaçınabilmek sadece bilgeliğe değil, aynı zamanda iyi talihe de bağlıdır. Ayrıca gerçek dostluğun belirsizlik anında ortaya çıktığına inanıyordu. Daha da önemlisi Cicero, Tanrılar tarafından insanlara bilgelik haricinde, dostluktan daha iyi bir şey verilmediğine inanıyordu.",
      '- Devam et lütfen. Peki ya sen ne düşünüyorsun?',
      '- Bence dostluk sadece iyiliklerden ibaret olamaz. "Dostta sadece zararsız olma vasfını arayan bir kimse, mezarlıktaki ölüleri dost edinsin" diyordu imam Gazzali. Tabii ki burada aleni kötülüklerden bahsetmiyorum ve niyetin de çok önemli olduğuna inanıyorum. Dost dediğin bazı zamanlarda zorlamalı, rahatsız etmeli, hatta karşımızdakinin de bir insan olduğunu hatırlarsak, yüzüstü bırakmalı ya da hayal kırıklığına uğratmalı. Bazen insanların hayatına yalnızca geçici bir süre için girdiğimizi ve hayatlarında oynamamız gereken rolü oynadıktan sonra da bizim için bu perdenin kapanması gerektiğini de unutmamak gerekiyor. Aynı şey bizim hayatımıza giren insanlar için de geçerli olabiliyor. Bana kalırsa ancak bu sayede gerçek bir dostluktan bahsedebiliriz.',
      '- Peki ya dost sence kime denir?',
      '- Bence dost iyi gününü paylaşabildiğin insandır. Mutlu bir haber aldığında ilk paylaşmak isteyeceğin kişidir. Kalk gidelim dediğin zaman nereye gideceğiz diye sormayacak olandır. Yalnızca seni değil, aynı zamanda potansiyelini gören ve buna yatırım yapandır. Sessizliğini paylaşandır. Gerektiğinde ağma için bir bastondur. Sağır için bir kulaktır. Dilsiz için bir sözdür. Böyle böyle çoğaltabilir ve dünyanın tüm güzel niteliklerini dostluk kavramına yakıştırabiliriz diye inanıyorum. Yine de "Nemo cogendus amicus" latince görüşünü; yani kimseyi dost olmaya zorlayamayacağımızı da unutmamak gerekli. Sen dostluk için neler söylerdin?',
      '- Çok güzel söyledin. Nietzsche aynı zevklere sahip biriyle olmak yerine, sevdiğini bilmediği şeyleri öğretecek birini tercih edeceğini söyleyerek dostluğun aslında bir gelişim sahası olması gerektiğini ifade ediyordu. Ben de bu görüşü en yakın olduğumuz beş insanın ortalaması olduğumuz görüşüyle birleştirip kendi hayatıma baktığımda ne kadar doğru olduğunu görüyorum. ',
      '- Çok doğru, peki başka söyleyeceğin şeyler olur muydu?',
      "- Belki de Nietzsche'nin bir diğer fikrini, yani yürüdüğümüz yolda daima önümüzde taşlar olacağını, önemli olanın bunları engel olarak mı yoksa üzerlerine basılacak merdivenler olarak mı göreceğimiz olduğu fikrini de dostluklar için söyleyebiliriz. Hatta belki de Nietzsche'nin bu iki fikri birbirini tamamlıyordur. Biz insanlar ince bir ip üzerinde yürüyen cambazlarız ve dostluk altımızdaki güvenlik ağıdır. İlerlerken her sendelediğimizde bizi bu ağ tekrar hayata daha güçlü bir şekilde bağlıyor ve bunu yaparken dostluk kendi bağlarını da güçlendiriyor. En azından bizim dostluğumuz için böyle olduğunu düşünüyorum.",
      '- Peki ya bir dostluğun ne zaman ya da nasıl başladığını düşünüyorsun? Sence bizim ilişkimiz ne zaman dostluğa dönüştü? ',
      '- Bence Ray Bradbury\'nin Fahrenheit 451 kitabında söylediği gibi, "Bir dostluğun tam olarak başladığı anı bilemeyiz. Bir kabın içine damla damla dolar gibi, sonunda o bir tek damla kabı taşırır. Böylece iyilikler dizisinin sonunda bir iyilik olur ki, insanın yüreği dolar taşar." Ben de geriye dönüp baktığımda ne zaman arkadaşlığımızın dostluğa dönüştüğünü bilmiyorum. Belki de bu dönüşüm, yolumuzda karşımıza çıkan taşları bir engel olarak görmek yerine birlikte bunlardan merdivenler yapmaya başladığımız anda gerçekleşmiştir.',
      '- Teşekkür ederim, duygulandım. Kısa bir nefeslenip kaldığımız yerden devam etmeye ne dersin?',
      '- Harika olur.',
    ],
  },
  {
    slug: 'dostluk-2',
    title: 'Dostluk 2',
    date: '2026-07-28',
    displayDate: '28 Temmuz 2026',
    position: 6,
    description:
      'Anlaşılmak, duvarları indirmek, niyet ile etki arasındaki fark ve ilişkide bozulanı birlikte onarmak üzerine.',
    body: [
      '- En son dostluğumuzun yolumuzdaki taşları engeller olarak görmek yerine bunları birer basamak olarak kullanmaya başladığımız anda başlamış olabileceğini söylemiştim. Sen ne düşünüyorsun?',
      '- George Orwell "insan sevilmekten çok anlaşılmayı istiyordu belki de" diyordu 1984 adlı kitabında. Ben de anlaşıldığımı düşündüğüm andan itibaren dostluğumuzun başlamış olabileceğini düşünüyorum. Yine de sence bu tek başına yeterli mi? Yani sadece anlaşılmak?',
      '- Ben anlaşılmanın yanına bir de insanın kendi duvarlarını indirebilmesini eklerdim.',
      '- Nasıl yani?',
      '- Şöyle ki; evet, karşımızdakini anlayabilir ve ona anlaşıldığını hissettirebiliriz. Ama bu anladığımız şey kendi duvarlarımıza çarpıp savunma olarak da geri dönebilir. Anladığımız şeyin bir şeye dönüşebilmesi de gerekiyor.',
      '- Nasıl bir dönüşümden bahsediyoruz peki? Her anlayışın ardından mutlaka bir dönüşüm mü gelmeli?',
      "- Her anlayış bir dönüşüm getiremez tabii ki ama en azından bir etkisi olmalı. İnsan 'seni anlıyorum' dedikten sonra, hele de konunun muhatabıyken, hiçbir şey olmamış gibi aynı yerde kalıyorsa, karşısındaki o an için anlaşıldığını hissetmiş olsa bile, içeride bir şeyler eksik kalıyor ve bu eksiklik zamanla daha da büyüyor.",
      '- Çok doğru... Bir saniyeliğine yaşadıklarımı düşündüm de... "Rahatsızlığım olsa söylerdim, hiç yok"lar, "göğsüme öküz oturdu, çok üzüldüm"ler ve nicesi. Bu sözler ilk başta beni rahatlatmıştı ama devamında bir şeyler eksik kalmıştı. Hiçbirinin altı doldurulmamış, anlaşılan şey sorumluluğa ve eyleme dönüşmemişti. Böyle olunca da bazı insanlardan bazı şeyleri beklememek gerektiğini öğrenmiştim.',
      '- Maalesef. Bazen kendini ne kadar açık ve temiz ifade etmeye çalışırsan çalış, günün sonunda karşındaki insanın kendi duvarlarına çarpabiliyorsun. Çünkü bazı şeyleri kabul etmek ve sorumluluk almak, insanın yaptığı yanlışları görmesini ve belki de kendi egosuyla yüzleşmesini gerektiriyor. Belki de en zoru da budur.',
      '- Kesinlikle. Zor yoldan öğrendiğim şeylerden biri de şiddetsiz iletişim gibi pratiklerin ancak karşındaki insan da açık ve buna hazır olduğunda işe yaradığıydı. Bu, bu pratiklerden vazgeçeceğimiz anlamına gelmiyor tabii ama en azından bazı şeyler olmadığında bütün sorumluluğu kendimizde aramayı bırakabiliriz.',
      '- Peki sence karşımızdaki insan kendi duvarlarını indirebildiğinde ne değişiyor?',
      '- O noktada karşımızdaki insanın anladığı şey savunmaya değil, meraka dönüşüyor sanırım. İnsan kendi niyetinin arkasına saklanmadan, insan ilişkilerinde asıl olan şeye, yani karşısındaki insanda yarattığı etkiye bakabiliyor. Ortadaki konu da kim haklı kim haksız meselesi olmak yerine, ilişkide neyin kırıldığına ve nasıl onarılacağına dönüşüyor.',
      '- Bu da biraz önce konuştuğumuz yere geliyor sanırım. Dostun hatasız olmasını bekleyemeyiz.',
      '- Kesinlikle. Zaten dostluk yalnızca birbirimizi hiç üzmediğimiz steril bir alan olamaz ki. Bence asıl belirleyici olan, birimiz diğerini üzdüğünde orada kalıp kalamadığımız. Savunmaya mı geçiyoruz, yoksa bozulan şeyi birlikte onarmaya mı çalışıyoruz?',
      '- Belki de yolumuzdaki taşları basamağa dönüştürmek dediğimiz şey de tam olarak budur. Taşların hiç olmaması değil, onlarla birlikte ne yaptığımız. Bu durumda bir sonraki konumuz sorumluluk olsun mu? Yeşil çaylar benden.',
    ],
  },
  {
    slug: 'sorumluluk',
    title: 'Sorumluluk',
    date: '2026-08-05',
    displayDate: '5 Ağustos 2026',
    position: 7,
    description: 'Açılmak, güvenmek, yaralanmak, sorumlulukları ayırmak ve sağlıklı sınırlar kurmak üzerine.',
    body: [
      '- Yolumuzdaki taşlardan söz ederken fark ettin mi bilmiyorum ama bir şeyi atladık sanırım. Duvarların anladığımız şeyin önüne geçmesinden söz ettik ama insanın anlaşılmak için kendi duvarlarını indirmesi gerektiğinden hiç bahsetmedik. Anlaşılmak isteyen kişinin rolü hakkında ne düşünüyorsun?',
      '- Bence anlaşılmak isteyen kişinin de kendini anlaşılabilir kılma konusunda bir rolü var. Ne hissettiğimizi, neye ihtiyaç duyduğumuzu ya da neyin canımızı acıttığını saklayıp karşımızdaki insanın bunları kendiliğinden anlamasını beklemek her zaman adil olmayabilir.',
      '- Ama insanın kendi duvarlarını indirmesi de kolay değil sanırım. Çünkü kendini açtığında, yanlış anlaşılmayı ya da açtığın yerden yaralanmayı da göze almış oluyorsun. Ve her yaralanmadan sonra bu daha da çok cesaret gerektiriyor.',
      '- Kesinlikle... Belki de yaşamak dediğimiz şey biraz da budur.  İnsanın kendisi gibi, paradokslarla dolu bir şey. Sevme cesareti göstermeden sevilmemek, güvenme cesareti göstermeden güvenilmemek gibi... Keşke karşındaki insanın seni asla incitmeyeceğinden emin olabilseydin ama bu mümkün olmadığı için yine de ona güvenme cesaretini gösteriyorsun.',
      '- Her yaralanmadan sonra daha çok cesaret gerektirdiğini söyledin. İnsan açıldığı, duvarlarını indirdiği ve güvendiği yerden yaralandığında neden sıradan bir saldırıdan ya da herhangi bir insanın vereceği zarardan çok daha fazla etkileniyor sence? Hatta kişisine ve bağlamına göre, bir nevi ihanete uğradığını düşünüyor?',
      '- Çünkü insanın canını yakan şey yalnızca bir söz ya da davranış değil bence. Aynı anda geçmişten gelen bütün birikmişlikler, o kişiye yüklenen anlamlar ve daha da önemlisi, ona emanet edilen, henüz kabuk tutmamış bir yaraya yine onun eliyle hançer saplanması da işin içine giriyor olabilir. Pir Sultan Abdal’ın darağacına giderken halkın attığı taşlardan değil de, dostum dediği insanın attığı gülden yaralanması gibi... Yani konu hiçbir zaman kullanılan silah değil.',
      '- Onu tutan el...',
      '- Evet. Hatta bazen o elin daha önce yarayı saracağına inandığımız el olması. Darbeyi ihanete dönüştüren şey biraz da bu sanırım.',
      '- Peki insan böyle bir şey yaşadıktan sonra ne yapmalı? Bir daha kimseye o kadar yaklaşmamak, hiçbir yarasını emanet etmemek daha güvenli olmaz mı?',
      '- Daha güvenli olabilir ama insanı yalnızca hançerden korumaz. Anlaşılmaktan, sevilmekten ve gerçekten yakınlık kurmaktan da uzak tutar. Belki mesele duvarları bir daha hiç indirmemek değil, onları kimin yanında ve ne kadar indireceğimizi öğrenmek.',
      '- Peki insan böyle bir şey yaşadıktan sonra, verdiği değerin, sevginin ya da güvenin yanlış olduğunu düşünmez mi?',
      '- Sanırım burada sorumlulukları doğru ayırabilmek gerekiyor. Verdiğimiz değer, sevgi, emek ve güven hâlâ bize ait. Karşımızdaki insanın bunlarla ne yaptığı ise ona ait. Bunu ayırabildiğimizde, bir sonraki sefer kuracağımız sınırlar da daha sağlıklı olacaktır. En azından sevdiğimiz, güvendiğimiz ya da emek verdiğimiz için kendimizi suçlamamamız gerektiğini düşünüyorum.',
      '- Peki sorumlulukları ayırmak gerçekten bu kadar kolay mı? Karşımızdaki insanın yaptığı ona ait olsa bile, açtığı yara bizimle kalıyor sonuçta.',
      '- Kolay değil. Hatta biraz haksızlık gibi de geliyor. Yarayı açan başkası oluyor ama o yarayla ne yapacağımıza yine biz karar vermek zorunda kalıyoruz. Yine de sanırım sorumluluk almak tam da burada başlıyor. Başımıza geleni kendi suçumuz gibi üstlenmekte değil, başımıza gelenin bundan sonra bizi neye dönüştüreceğine karar vermekte.',
      '- Ama bu durumda, zaten zarar görmüş insana bir de iyileşme sorumluluğunu ve yükünü bırakmış olmuyor muyuz?',
      '- Yaşadıklarından dolayı onu suçlarsak, evet olur. Ama ben onu kastetmiyorum. Güvenme cesaretini gösterdiğimiz için suçlu olamayız. Karşımızdakinin o güvenle ne yaptığı da bizim elimizde olan bir şey değil. Bize ait olan, bu deneyimden sonra kendimiz için ne yapacağımız, neyi artık kabul etmeyeceğimiz ve hayatımıza nasıl devam etmeyi seçeceğimiz.',
      '- Yani sorumluluk insanı suçlamak yerine yeniden özne hâline getiriyor diyebilir miyiz?',
      "- Sanırım evet. Suçluluk insanı dönüp dolaşıp geçmişte tutarken, sorumluluk bundan sonra ne yapabileceğimize bakıyor. Belki Adler'in sorumlulukların ayrılığı dediği şey de biraz budur. Başkasının duvarlarını onun yerine indiremeyiz ama kendi kapımızı kime ve ne kadar açacağımıza karar verebiliriz.",
      '- Buradan yeni sohbetimiz için güzel bir konu çıkıyor sanki. Sağlıklı sınırlar. Ne dersin?',
      '- Tam isabet. Son getirdiğin yeşil çay güzel değildi ama, telafisini istiyorum.',
    ],
  },
] satisfies Essay[];

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find((essay) => essay.slug === slug);
}

export function getEssayNavigation(slug: string): { previous?: Essay; next?: Essay } {
  const index = essays.findIndex((essay) => essay.slug === slug);

  if (index === -1) {
    return {};
  }

  return {
    previous: essays[index - 1],
    next: essays[index + 1],
  };
}
