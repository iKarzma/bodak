let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هنري بحبك|هنري عاوزه اتجوزك|بحبك|بموت فيك|نتجوز|هنري هنتجوز امتي|هنري انت ليا|هنري بموت فيك$/i.test(m.text)) { 
     responses = [ 
       'شكرا  ',  
       'هفكر في الموضوع',  
             'و انا',  
                   'استحيت',  
                         'خلاص لا اتكسف ',  
                               'اسكتتتتت عشان مضربكش عيب الكلام ده   ',  
                                     'طيب و بعدين '  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام',  
          'وعليكم السلام حبي منور',  
              ' وعليكم السلام كيفك',  
                   'وعليكم السلام ورحمة الله وبركاته' 
     ]; 
   }else if (/^ هنري عامل اي|عامل اي|عاملين اي|الدنيا عامله اي|عاملين اي يشباب$/i.test(m.text)) { 
     responses = [ 
       'كل شيء بخير الحمد لله ',  
          ' مش عارف  ',  
              ' الحمد لله ماشي الحال ',  
                  'الحمد الله',  
                      ' لو انت كويس انا كويس' 
     ]; 
   }else if (/^كل خرا|هات بوسه|عرص|طيزك|خول|متناك|متيجي|كسمك|يعلق$/i.test(m.text)) { 
     responses = [ 
       'عيب ',  
          ' اتأدب ',  
              ' يا وسخ ',  
                  'الله يهديك ',  
                   ' عيب يا طفل',
                   'مواحح بحبك'
     ]; 
 }else if (/^تم تعريب هذا الامر|تم الانتهاء|تمت اضافه|تمت اضافة|تم التعريب|هذا الامر انتهي$/i.test(m.text)) { 
     responses = [ 
       ' عاشت ايدك ✨💜',  
           'تسلم ايدك ✨💜 ',  
                'عاش ✨💜 ',  
                  'عاش  هنري ✨💜',  
                   'اوكي ✨💜' 
     ]; 
   }else if (/^لول|هههه|ههههه|هههههه|ههههههه|هههههههه|😂😂😂$/i.test(m.text)) { 
     responses = [ 
       'دوم دي ضحكة ',  
            ' ضحكني معاك',  
                   'دوم يا رب  ',  
                         'ههه ',  
                         '😂😂😂',  
                         'ايه ال بيضحك',  
                         'اضحك معاك؟',  
                             'دوم ' 
   ]; 
   }else if (/^هنري|هنري عمك|يا هنري$/i.test(m.text)) { 
     responses = [ 
       'قلب هنري من جوا✨🥺♥',  
          ' هنري عمك✨🤺 ',  
              ' قلب هنري من جوا✨🥺♥',  
                  'قلب هنري من جوا✨🥺♥ ',  
                   ' هنري عمك✨🤺' 
]; 
   }else if (/^بوت|يا بوت|البوت|بوووت|بووووت|بوووووت|بووووووووت $/i.test(m.text)) { 
     responses = [ 
       '*اسمي هنري يروحي*✨♥',  
          ' *اسمي هنري يعمري*✨♥',  
              ' *اسمي هنري يحب*✨♥',  
                  '*اسمي هنري يروحي*✨💜 ',  
                  ' *اسمي هنري يحب*✨💜'    
  ]; 
   }else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح|صباح الخير $/i.test(m.text)) { 
     responses = [ 
       'صباح الفل ✨💜',  
          'صباح النور ✨💜 ',  
              ' صباح الكاريزما ✨💜',  
                  'انت صحيت وانا رايح انام 🐦👋🏻 ',  
                   'روح نام تاني بقي 🙃' 
     ]; 
   }else if (/^شكرا|تسلم|تسلمي$/i.test(m.text)) { 
     responses = [ 
       'العفو✨🥺♥',  
          ' ولا يهمك مفيش حاجه✨💫 ',  
              ' الشكر لله ✨💜',  
                   'العفو يبشه ✨💜' 
]; 
   }else if (/^🧡|💚|💞|💖|💜|💛|🤍 $/i.test(m.text)) { 
     responses = [ 
       'شكرا✨♥',  
          'تسلم✨♥',  
              '✨♥',  
                  'حبيبي✨💜',  
                   '✨💜' 
  ]; 
     }else if (/^كل ده نور|الجروب نور كده ليه|ايه النور ده|منورين الجدد|منورين|منور $/i.test(m.text)) { 
     responses = [ 
       'نوري انا✨♥',  
          'الجروب نور فعلا✨♥',  
              '✨♥',  
                  'الجروب منور✨💜',  
                   '✨💜' 
  ]; 
   }else if (/^اسكت|اسكت|هتسكت امتي|يا ابني اسكت$/i.test(m.text)) { 
     responses = [ 
             'ملكش دعوه ', 
              ' لع وانت مالك',  
                 ' مش بمزاجك',  
                 'لا مين انت ال هتسكتني ',  
                   'اسكت انت' 
     ]; 
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;