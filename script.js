document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 16;
    let currentPage = 1;

    const videoList = [
       //  { title: "", url: "../videolar2/2 (1).mp4", thumbnail: "../resimler2/2 (1).png", category: "category1", description: "" },


       { title: "Kızıl afet den bir sakso", url: "../videolar/1.mp4", thumbnail: "../resimler/1.png", category: "category1", description: "Kızıl saçlı afet erkeğinin taşşaklarına kadar yalıyor" },
       { title: "Fileli çorabınıda giymiş", url: "../videolar/2.mp4", thumbnail: "../resimler/2.png", category: "category2", description: "Yeter Yeter desede durmuyo" },
       { title: "Kızıl yarrak istiyor", url: "../videolar/3.mp4", thumbnail: "../resimler/3.png", category: "category2", description: "Kızıl saçlı kadın erkeği için domalıyor(admin tavsiysi)" },
       { title: "Azgın sarışın bakire", url: "../videolar/4.mp4", thumbnail: "../resimler/4.png", category: "category2", description: "Azgın kadın bakireliği bozulmaması için içine almıyor" },
       { title: "Fazntezik üni liler", url: "../videolar/5.mp4", thumbnail: "../resimler/5.png", category: "category2", description: "Üniversiteli gençler fazntezi peşinde" },
       { title: "Sarışına nefes aldırmıyor", url: "../videolar/6.mp4", thumbnail: "../resimler/6.png", category: "category2", description: "seni ilk siktiğimde kaç yaşındayıdn diye soruyor" },
       { title: "İnci gibi kızdan sakso", url: "../videolar/7.mp4", thumbnail: "../resimler/7.png", category: "category1", description: "Taş gibi liseli sevgilisine sakso çektiriyor" }, 
       { title: "Arabada aldatmaca", url: "../videolar1/1 (1).mp4", thumbnail: "../resimler1/1 (1).png", category: "category2", description: "" },
       { title: "Küçük bi sakso", url: "../videolar1/1 (2).mp4", thumbnail: "../resimler1/1 (2).png", category: "category1", description: "" },
       { title: "Gençler iş yürütüyo", url: "../videolar1/1 (3).mp4", thumbnail: "../resimler1/1 (3).png", category: "category2", description: "" },
       { title: "Adanalı keko 1", url: "../videolar1/1 (4).mp4", thumbnail: "../resimler1/1 (4).png", category: "category2", description: "" },
       { title: "Adanalı keko 2", url: "../videolar1/1 (5).mp4", thumbnail: "../resimler1/1 (5).png", category: "category1", description: "" },
       { title: "Afeti sikiyor", url: "../videolar1/1 (6).mp4", thumbnail: "../resimler1/1 (6).png", category: "category2", description: "" },
       { title: "Çok azgın çok", url: "../videolar1/1 (7).mp4", thumbnail: "../resimler1/1 (7).png", category: "category2", description: "" },
       { title: "Gizli çekim", url: "../videolar1/1 (8).mp4", thumbnail: "../resimler1/1 (8).png", category: "category2", description: "" },
       { title: "İteatkar bir sakso", url: "../videolar1/1 (9).mp4", thumbnail: "../resimler1/1 (9).png", category: "category1", description: "" },
       { title: "İlk kez anal alıyor", url: "../videolar1/1 (10).mp4", thumbnail: "../resimler1/1 (10).png", category: "category2", description: "" },
       { title: "Sikini ağzına vuruyor", url: "../videolar1/1 (11).mp4", thumbnail: "../resimler1/1 (11).png", category: "category1", description: "" },
       { title: "Liseliler okulun orospusuyla", url: "../videolar1/1 (12).mp4", thumbnail: "../resimler1/1 (12).png", category: "category2", description: "" },
       { title: "Güzel kızdan çıtırdan bir sakso", url: "../videolar1/1 (13).mp4", thumbnail: "../resimler1/1 (13).png", category: "category1", description: "" },
       { title: "Değişik bir sakso", url: "../videolar1/1 (14).mp4", thumbnail: "../resimler1/1 (14).png", category: "category1", description: "" },
       { title: "Geçenki gibi diyor", url: "../videolar1/1 (15).mp4", thumbnail: "../resimler1/1 (15).png", category: "category2", description: "" },
       { title: "Hanımkızımızdan bir sakso", url: "../videolar1/1 (16).mp4", thumbnail: "../resimler1/1 (16).png", category: "category1", description: "" },
       //  { title: " ", url: "../videolar1/1 (17).mp4", thumbnail: "../resimler1/1 (17).png", category: "category1", description: "" },
       { title: "izmir orospusu", url: "../videolar1/1 (18).mp4", thumbnail: "../resimler1/1 (18).png", category: "category2", description: "" },
       { title: "İçime boşal diyor", url: "../videolar1/1 (19).mp4", thumbnail: "../resimler1/1 (19).png", category: "category2", description: "" },
       { title: "Gözü kapalı zıplıyor", url: "../videolar1/1 (20).mp4", thumbnail: "../resimler1/1 (20).png", category: "category2", description: "" },
       { title: "Eskilerden nostajik", url: "../videolar1/1 (21).mp4", thumbnail: "../resimler1/1 (21).png", category: "category2", description: "" },
       { title: "Otobanda para karşılığı", url: "../videolar1/1 (22).mp4", thumbnail: "../resimler1/1 (22).png", category: "category2", description: "" },
       { title: "Önce yalıyor sonra içine alıyor", url: "../videolar1/1 (23).mp4", thumbnail: "../resimler1/1 (23).png", category: "category1", description: "" },
       { title: "Sert sert pompalıyor", url: "../videolar1/1 (24).mp4", thumbnail: "../resimler1/1 (24).png", category: "category2", description: "" },
       { title: "Kibarca yalıyor", url: "../videolar1/1 (25).mp4", thumbnail: "../resimler1/1 (25).png", category: "category1", description: "" },
       { title: "Kızınıda sik diyo", url: "../videolar1/1 (26).mp4", thumbnail: "../resimler1/1 (26).png", category: "category2", description: "" },
       { title: "Onlyfans cılardan harika bir video", url: "../videolar1/1 (27).mp4", thumbnail: "../resimler1/1 (27).png", category: "category1", description: "" },
       { title: "Ev sahibine saplıyor", url: "../videolar1/1 (28).mp4", thumbnail: "../resimler1/1 (28).png", category: "category2", description: "" },
       { title: "Mahalle orospusuna grup", url: "../videolar1/1 (29).mp4", thumbnail: "../resimler1/1 (29).png", category: "category2", description: "" },
       { title: "bGözü bandajlı kim bilir kimi düşünüyor", url: "../videolar1/1 (31).mp4", thumbnail: "../resimler1/1 (31).png", category: "category2", description: "" },
       { title: "Sessizce sikişiyorlar", url: "../videolar1/1 (32).mp4", thumbnail: "../resimler1/1 (32).png", category: "category2", description: "" },
       { title: "Kucağına almış saplıyor", url: "../videolar1/1 (33).mp4", thumbnail: "../resimler1/1 (33).png", category: "category2", description: "" },
       { title: "Çiftlerin deli dolu seksleri", url: "../videolar1/1 (34).mp4", thumbnail: "../resimler1/1 (34).png", category: "category2", description: "" },
       { title: "Garip bir seks", url: "../videolar1/1 (35).mp4", thumbnail: "../resimler1/1 (35).png", category: "category2", description: "" },
       { title: "Sarışın zıplıyor", url: "../videolar1/1 (36).mp4", thumbnail: "../resimler1/1 (36).png", category: "category2", description: "" },
       { title: "Türbalıdan sakso", url: "../videolar1/1 (37).mp4", thumbnail: "../resimler1/1 (37).png", category: "category1", description: "" },
       { title: "Afet irem sakso çekiyor", url: "../videolar1/1 (38).mp4", thumbnail: "../resimler1/1 (38).png", category: "category1", description: "" },
       { title: "ŞAnslı piç 2 afet ile beraber", url: "../videolar1/1 (39).mp4", thumbnail: "../resimler1/1 (39).png", category: "category1", description: "" },
       { title: "Beyaz götlü erkeğini bekliyor", url: "../videolar1/1 (40).mp4", thumbnail: "../resimler1/1 (40).png", category: "category2", description: "" },
       { title: "Işıklar içinde seks", url: "../videolar1/1 (41).mp4", thumbnail: "../resimler1/1 (41).png", category: "category2", description: "" },
       { title: "Alamam diyor", url: "../videolar1/1 (42).mp4", thumbnail: "../resimler1/1 (42).png", category: "category1", description: "" },
       { title: "Kızıl genci tatmin ediyor", url: "../videolar1/1 (43).mp4", thumbnail: "../resimler1/1 (43).png", category: "category2", description: "" },
       { title: "Kızımıda sik diyor", url: "../videolar1/1 (44).mp4", thumbnail: "../resimler1/1 (44).png", category: "category2", description: "" },
       { title: "Kucakta enfes bir seks", url: "../videolar1/1 (45).mp4", thumbnail: "../resimler1/1 (45).png", category: "category2", description: "" },
       { title: "TÜrbanlı sakso", url: "../videolar1/1 (46).mp4", thumbnail: "../resimler1/1 (46).png", category: "category1", description: "" },
       { title: "Gençler sikişirken diyeride çekiyo", url: "../videolar1/1 (47).mp4", thumbnail: "../resimler1/1 (47).png", category: "category2", description: "" },
       { title: "Ayakta saplıyor", url: "../videolar1/1 (48).mp4", thumbnail: "../resimler1/1 (48).png", category: "category2", description: "" },
       { title: "", url: "../videolar1/1 (49).mp4", thumbnail: "../resimler1/1 (49).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (50).mp4", thumbnail: "../resimler1/1 (50).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (51).mp4", thumbnail: "../resimler1/1 (51).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (52).mp4", thumbnail: "../resimler1/1 (52).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (53).mp4", thumbnail: "../resimler1/1 (53).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (54).mp4", thumbnail: "../resimler1/1 (54).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (55).mp4", thumbnail: "../resimler1/1 (55).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (56).mp4", thumbnail: "../resimler1/1 (56).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (57).mp4", thumbnail: "../resimler1/1 (57).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (58).mp4", thumbnail: "../resimler1/1 (58).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (59).mp4", thumbnail: "../resimler1/1 (59).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (60).mp4", thumbnail: "../resimler1/1 (60).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (61).mp4", thumbnail: "../resimler1/1 (61).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (62).mp4", thumbnail: "../resimler1/1 (62).png", category: "category1", description: "" },
       { title: "", url: "../videolar1/1 (63).mp4", thumbnail: "../resimler1/1 (63).png", category: "category1", description: "" },   
       { title: "", url: "../videolar1/1 (65).mp4", thumbnail: "../resimler1/1 (65).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (66).mp4", thumbnail: "../resimler1/1 (66).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (67).mp4", thumbnail: "../resimler1/1 (67).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (68).mp4", thumbnail: "../resimler1/1 (68).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (69).mp4", thumbnail: "../resimler1/1 (69).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (70).mp4", thumbnail: "../resimler1/1 (70).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (71).mp4", thumbnail: "../resimler1/1 (71).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (72).mp4", thumbnail: "../resimler1/1 (72).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (73).mp4", thumbnail: "../resimler1/1 (73).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (74).mp4", thumbnail: "../resimler1/1 (74).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (75).mp4", thumbnail: "../resimler1/1 (75).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (76).mp4", thumbnail: "../resimler1/1 (76).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (77).mp4", thumbnail: "../resimler1/1 (77).png", category: "category1", description: "" }, 
       { title: " ", url: "../videolar1/1 (79).mp4", thumbnail: "../resimler1/1 (79).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (80).mp4", thumbnail: "../resimler1/1 (80).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (81).mp4", thumbnail: "../resimler1/1 (81).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (82).mp4", thumbnail: "../resimler1/1 (82).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (83).mp4", thumbnail: "../resimler1/1 (83).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (84).mp4", thumbnail: "../resimler1/1 (84).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (85).mp4", thumbnail: "../resimler1/1 (85).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (86).mp4", thumbnail: "../resimler1/1 (86).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (87).mp4", thumbnail: "../resimler1/1 (87).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (88).mp4", thumbnail: "../resimler1/1 (88).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (89).mp4", thumbnail: "../resimler1/1 (89).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (90).mp4", thumbnail: "../resimler1/1 (90).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (91).mp4", thumbnail: "../resimler1/1 (91).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (92).mp4", thumbnail: "../resimler1/1 (92).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (93).mp4", thumbnail: "../resimler1/1 (93).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (94).mp4", thumbnail: "../resimler1/1 (94).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (95).mp4", thumbnail: "../resimler1/1 (95).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (96).mp4", thumbnail: "../resimler1/1 (96).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (97).mp4", thumbnail: "../resimler1/1 (97).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (98).mp4", thumbnail: "../resimler1/1 (98).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (99).mp4", thumbnail: "../resimler1/1 (99).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (100).mp4", thumbnail: "../resimler1/1 (100).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (101).mp4", thumbnail: "../resimler1/1 (101).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (102).mp4", thumbnail: "../resimler1/1 (102).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (104).mp4", thumbnail: "../resimler1/1 (104).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (106).mp4", thumbnail: "../resimler1/1 (106).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (107).mp4", thumbnail: "../resimler1/1 (107).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (108).mp4", thumbnail: "../resimler1/1 (108).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (109).mp4", thumbnail: "../resimler1/1 (109).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (110).mp4", thumbnail: "../resimler1/1 (110).png", category: "category1", description: "" }, 
       { title: " ", url: "../videolar1/1 (112).mp4", thumbnail: "../resimler1/1 (112).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (113).mp4", thumbnail: "../resimler1/1 (113).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (114).mp4", thumbnail: "../resimler1/1 (114).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (115).mp4", thumbnail: "../resimler1/1 (115).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (116).mp4", thumbnail: "../resimler1/1 (116).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (118).mp4", thumbnail: "../resimler1/1 (118).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (120).mp4", thumbnail: "../resimler1/1 (120).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (121).mp4", thumbnail: "../resimler1/1 (121).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (122).mp4", thumbnail: "../resimler1/1 (122).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (123).mp4", thumbnail: "../resimler1/1 (123).png", category: "category1", description: "" },
       { title: " ", url: "../videolar1/1 (124).mp4", thumbnail: "../resimler1/1 (124).png", category: "category1", description: "" },



       { title: "", url: "../videolar2/2 (1).mp4", thumbnail: "../resimler2/2 (1).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (2).mp4", thumbnail: "../resimler2/2 (2).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (3).mp4", thumbnail: "../resimler2/2 (3).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (4).mp4", thumbnail: "../resimler2/2 (4).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (5).mp4", thumbnail: "../resimler2/2 (5).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (6).mp4", thumbnail: "../resimler2/2 (6).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (7).mp4", thumbnail: "../resimler2/2 (7).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (8).mp4", thumbnail: "../resimler2/2 (8).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (9).mp4", thumbnail: "../resimler2/2 (9).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (10).mp4", thumbnail: "../resimler2/2 (10).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (11).mp4", thumbnail: "../resimler2/2 (11).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (12).mp4", thumbnail: "../resimler2/2 (12).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (13).mp4", thumbnail: "../resimler2/2 (13).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (14).mp4", thumbnail: "../resimler2/2 (14).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (15).mp4", thumbnail: "../resimler2/2 (15).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (16).mp4", thumbnail: "../resimler2/2 (16).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (17).mp4", thumbnail: "../resimler2/2 (17).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (18).mp4", thumbnail: "../resimler2/2 (18).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (19).mp4", thumbnail: "../resimler2/2 (19).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (20).mp4", thumbnail: "../resimler2/2 (20).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (21).mp4", thumbnail: "../resimler2/2 (21).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (22).mp4", thumbnail: "../resimler2/2 (22).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (23).mp4", thumbnail: "../resimler2/2 (23).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (24).mp4", thumbnail: "../resimler2/2 (24).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (25).mp4", thumbnail: "../resimler2/2 (25).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (26).mp4", thumbnail: "../resimler2/2 (26).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (27).mp4", thumbnail: "../resimler2/2 (27).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (28).mp4", thumbnail: "../resimler2/2 (28).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (29).mp4", thumbnail: "../resimler2/2 (29).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (30).mp4", thumbnail: "../resimler2/2 (30).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (31).mp4", thumbnail: "../resimler2/2 (31).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (32).mp4", thumbnail: "../resimler2/2 (32).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (33).mp4", thumbnail: "../resimler2/2 (33).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (34).mp4", thumbnail: "../resimler2/2 (34).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (35).mp4", thumbnail: "../resimler2/2 (35).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (36).mp4", thumbnail: "../resimler2/2 (36).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (37).mp4", thumbnail: "../resimler2/2 (37).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (38).mp4", thumbnail: "../resimler2/2 (38).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (39).mp4", thumbnail: "../resimler2/2 (39).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (40).mp4", thumbnail: "../resimler2/2 (40).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (41).mp4", thumbnail: "../resimler2/2 (41).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (42).mp4", thumbnail: "../resimler2/2 (42).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (43).mp4", thumbnail: "../resimler2/2 (43).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (44).mp4", thumbnail: "../resimler2/2 (44).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (45).mp4", thumbnail: "../resimler2/2 (45).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (46).mp4", thumbnail: "../resimler2/2 (46).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (47).mp4", thumbnail: "../resimler2/2 (47).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (48).mp4", thumbnail: "../resimler2/2 (48).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (49).mp4", thumbnail: "../resimler2/2 (49).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (50).mp4", thumbnail: "../resimler2/2 (50).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (51).mp4", thumbnail: "../resimler2/2 (51).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (52).mp4", thumbnail: "../resimler2/2 (52).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (53).mp4", thumbnail: "../resimler2/2 (53).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (54).mp4", thumbnail: "../resimler2/2 (54).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (55).mp4", thumbnail: "../resimler2/2 (55).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (56).mp4", thumbnail: "../resimler2/2 (56).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (57).mp4", thumbnail: "../resimler2/2 (57).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (58).mp4", thumbnail: "../resimler2/2 (58).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (59).mp4", thumbnail: "../resimler2/2 (59).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (60).mp4", thumbnail: "../resimler2/2 (60).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (61).mp4", thumbnail: "../resimler2/2 (61).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (62).mp4", thumbnail: "../resimler2/2 (62).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (63).mp4", thumbnail: "../resimler2/2 (63).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (64).mp4", thumbnail: "../resimler2/2 (64).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (65).mp4", thumbnail: "../resimler2/2 (65).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (66).mp4", thumbnail: "../resimler2/2 (66).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (67).mp4", thumbnail: "../resimler2/2 (67).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (68).mp4", thumbnail: "../resimler2/2 (68).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (69).mp4", thumbnail: "../resimler2/2 (69).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (70).mp4", thumbnail: "../resimler2/2 (70).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (71).mp4", thumbnail: "../resimler2/2 (71).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (72).mp4", thumbnail: "../resimler2/2 (72).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (73).mp4", thumbnail: "../resimler2/2 (73).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (74).mp4", thumbnail: "../resimler2/2 (74).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (75).mp4", thumbnail: "../resimler2/2 (75).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (76).mp4", thumbnail: "../resimler2/2 (76).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (77).mp4", thumbnail: "../resimler2/2 (77).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (78).mp4", thumbnail: "../resimler2/2 (78).png", category: "category1", description: "" },
       { title: "", url: "../videolar2/2 (79).mp4", thumbnail: "../resimler2/2 (79).png", category: "category1", description: "" },
      


       

    ];

    const videosContainer = document.getElementById("videos");
    const searchInput = document.getElementById("searchInput");
    const categorySelect = document.getElementById("categorySelect");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const currentPageElement = document.getElementById("currentPage");

    // Sayfa yüklendiğinde önceki sayfa numarasını kontrol et
    const savedPage = sessionStorage.getItem("currentPage");
    if (savedPage) {
        currentPage = Math.ceil(savedPage / itemsPerPage);
    }

    renderVideos(videoList);

    // Arama ve kategori seçimi değişikliklerine göre video listesini güncelle
    searchInput.addEventListener("input", updateVideoList);
    categorySelect.addEventListener("change", updateVideoList);

    // Sayfalama butonlarına tıklama olayları
    prevPageButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            renderVideos(videoList);
            updatePageSelect();
        }
    });

    nextPageButton.addEventListener("click", function () {
        const maxPage = Math.ceil(videoList.length / itemsPerPage);
        if (currentPage < maxPage) {
            currentPage++;
            renderVideos(videoList);
            updatePageSelect();
        }
    });

    // Sayfa seçim çubuğunu doldur
    populatePageSelect();

    // Sayfa seçim çubuğuna değişiklik olayı ekle
    const pageSelect = document.getElementById("pageSelect");
    pageSelect.addEventListener("change", function () {
        currentPage = parseInt(pageSelect.value, 10);
        renderVideos(videoList);
    });

    function renderVideos(videoList) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentVideos = videoList.slice(startIndex, endIndex);

        videosContainer.innerHTML = "";

        currentVideos.forEach((video, index) => {
            const videoWrapper = document.createElement("div");
            videoWrapper.classList.add("video-wrapper");

            const thumbnailElement = document.createElement("img");
            thumbnailElement.src = video.thumbnail;
            thumbnailElement.alt = video.title;

            const titleElement = document.createElement("h2");
            titleElement.textContent = video.title;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = video.description || "Açıklama yok";

            videoWrapper.appendChild(thumbnailElement);
            videoWrapper.appendChild(titleElement);
            videoWrapper.appendChild(descriptionElement);

            // Video resmine ve başlığa tıklama olayı ekle
            thumbnailElement.addEventListener("click", () => redirectToVideoPage(video));
            titleElement.addEventListener("click", () => redirectToVideoPage(video));

            videosContainer.appendChild(videoWrapper);
        });

        currentPageElement.textContent = currentPage;
        updatePageSelect();
    }

    function updateVideoList() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;

        const filteredVideos = videoList.filter((video) => {
            const titleMatch = video.title.toLowerCase().includes(searchTerm);
            const categoryMatch =
                selectedCategory === "all" || video.category === selectedCategory;

            return titleMatch && categoryMatch;
        });

        currentPage = 1;
        renderVideos(filteredVideos);
    }

    function populatePageSelect() {
        const maxPage = Math.ceil(videoList.length / itemsPerPage);
        const pageSelect = document.getElementById("pageSelect");

        pageSelect.innerHTML = "";

        for (let i = 1; i <= maxPage; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            pageSelect.appendChild(option);
        }

        pageSelect.value = currentPage;
    }

    function updatePageSelect() {
        const pageSelect = document.getElementById("pageSelect");
        pageSelect.value = currentPage;
    }

    function redirectToVideoPage(video) {
        // Yeni bir sayfaya yönlendirme işlemini gerçekleştirir.
        sessionStorage.setItem("currentPage", currentPage * itemsPerPage); // Sayfa numarasını sakla
        window.location.href = `video.html?src=${encodeURIComponent(video.url)}&title=${encodeURIComponent(video.title)}&description=${encodeURIComponent(video.description)}`;
    }
});
