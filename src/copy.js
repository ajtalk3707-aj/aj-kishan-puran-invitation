// ✏️ EDIT HERE — settings + every word of the invitation, in Gujarati (gu) and English (en).
import weddingSongUrl from './assests/aaj-sajya.mpeg'

export const CFG = {
  phone: '7861821164',
  // Wedding moment used by the countdown (India time). UPDATE if your date changes.
  weddingISO: '2027-01-28T10:00:00+05:30',
  mapQuery: 'https://maps.app.goo.gl/yH3iq2y29mpKmdg89',
  mapQuery1: 'https://maps.app.goo.gl/bXtTHNSKaExc51366',
  // Wedding song from the assets folder; set to '' to use the built-in ambient music.
  musicUrl: weddingSongUrl,
}

const SH1_GU = 'વક્રતુંડ મહાકાય, સૂર્યકોટિ સમપ્રભ ।\nનિર્વિઘ્નં કુરુ મે દેવ, સર્વકાર્યેષુ સર્વદા ॥'
const SH2_GU = 'માંગલ્યં ભગવાન વિષ્ણુ, માંગલ્યં ગરુડધ્વજઃ ।\nમાંગલ્યં પુંડરીકાક્ષો, મંગલાય તનો હરિઃ ॥'
const SH1_EN = 'वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा ॥'
const SH2_EN = 'माङ्गल्यं भगवान् विष्णुः, माङ्गल्यं गरुडध्वजः ।\nमाङ्गल्यं पुण्डरीकाक्षो, मङ्गलायतनो हरिः ॥'

export const COPY = {
  gu: {
    intro: {
      suspense: ['ચાંદનીએ બે નામોની વાર્તા સજાવી છે…', 'એક વચન, બે જીવનનો સાથ…', 'સાત ફેરામાં ખીલશે પ્રેમની નવી કહાણી…', 'કિશન અને પુરનના મિલનની ઘડી નજીક છે…'],
      tap: 'કંકોતરી ખોલવા કવર પર સ્પર્શ કરો', skip: 'છોડો',
    },
    hero: {
      initials: 'K & P', eyebrow: 'શુભ વિવાહ', g: 'ચિ. કિશન', and: 'સંગ', b: 'ચિ. પુરન',
      date: 'તા. ૨૮/૦૧/૨૦૨૭, ગુરુવાર', place: '', cdTitle: 'શુભ ઘડીને બાકી',
      units: ['દિવસ', 'કલાક', 'મિનિટ', 'સેકન્ડ'], cdDone: 'શુભ ઘડી આવી ગઈ છે 🎉', scroll: 'નીચે સ્ક્રોલ કરો',
    },
    invite: {
      ganesh: '॥ શ્રી ગણેશાય નમઃ ॥', sh1: SH1_GU, sh2: SH2_GU, title: 'વિવાહ સંસ્કાર',
      intro: 'સ્નેહીશ્રી, આપ સર્વેને જણાવતાં અત્યંત હર્ષ થાય છે કે અમારા પરિવારના ચિરંજીવી',
      blessing: 'ના શુભ વિવાહ પ્રસંગે આપ સપરિવાર પધારી નવદંપતીને આશીર્વાદ આપી અમારા આનંદમાં વધારો કરશો એવી નમ્ર વિનંતી.',
      quote: 'બે હૃદયનું મિલન, બે પરિવારનો સંગમ… આપની હાજરી અમારા આનંદનો ઉત્સવ બનાવશે.',
    },
    schedule: {
      title: 'ઉત્સવ કાર્યક્રમ',
      days: [
        { label: 'પ્રથમ દિવસ', date: 'બુધવાર, તા. ૨૭/૦૧/૨૦૨૭', items: [
          { time: 'સવારે ૯:૧૫', icon: '🪔', title: 'મંડપ મુહૂર્ત' },
          { time: 'બપોરે ૧૦:૦૦', icon: '🌼', title: 'હલ્દી રસમ', desc: 'સ્વરુચી ભોજન સાથે આપની પધારવા વિનંતી.' },
          { time: 'બપોરે ૧૧:૩૦', icon: '🍽️', title: 'સ્વરુચી ભોજન', desc: 'પ્રેમ રાસ ઉત્સવ' },
          { time: 'રાત્રે ૯:૩૦', icon: '🪕', title: 'રાસ-ગરબા', desc: 'પ્રેમ રાસ' },
        ] },
        { label: 'બીજો દિવસ', date: 'ગુરુવાર, તા. ૨૮/૦૧/૨૦૨૭', items: [
          { time: 'વહેલી સવારે ૭:૦૦', icon: '🎺', title: 'જાન પ્રસ્થાન', desc: 'સણોસરાથી' },
          { time: 'સવારે ૧૦:૦૦', icon: '💍', title: 'હસ્ત મેળાપ', desc: 'શુભ ચોઘડિયે' },
          { time: 'બપોરે ૧૧:૩૦', icon: '🍽️', title: 'ભોજન સમારંભ' },
        ] },
      ],
    },
    kalrav: { title: 'મધુર કલરવ', msg: 'લગ્નના શુભ પ્રસંગે પ્રેમ અને સ્નેહની લાગણીઓ સાથે આપ સૌની હાજરી અમારા માટે આશીર્વાદ સમાન છે. પધારશો જ, એવી અપેક્ષા સહ.', sender: '– સાદર, સૌ સ્નેહીજનો' },
    venue: { title: 'શુભ સ્થળ', name: 'સણોસરા(વાડીએ)', lines: ['ખેરાણા રોડ', 'ચોટીલા, સુરેન્દ્રનગર.'], btnMap: 'ગૂગલ મેપ પર લોકેશન જુઓ' },
    venue2: { title: 'લગ્ન સ્થળ', name: 'સમઢિયાળા', lines: ['સમઢિયાળા', 'વિંછીયા.'], btnMap: 'ગૂગલ મેપ પર લોકેશન જુઓ' },
    family: {
      title: 'પરિવારજનો',
      cards: [
        { t: 'નિમંત્રક', list: ['શ્રી વશરામભાઈ છગનભાઈ પરમાર', 'સરનામું: ખેરાણા રોડ - સણોસરા, તા. ચોટીલા'] },
        { t: 'લિ. સ્નેહાધીન', list: ['શ્રી વિરજીભાઈ છગનભાઈ પરમાર', 'શ્રી વશરામભાઈ છગનભાઈ પરમાર', 'શ્રી ભુપતભાઈ છગનભાઈ પરમાર', 'શ્રી સંજયભાઈ વિરજીભાઈ પરમાર', 'શ્રી જસમતભાઈ વિરજીભાઈ પરમાર', 'શ્રી વિશાલભાઈ વશરામભાઈ પરમાર'] },
        { t: 'લિ. દર્શનાભિલાષી', list: ['ચિ. પ્રદીપ, ચિ. અક્ષિત', 'ચિ. અંકિતા, ચિ. ઉર્મિલા, ચિ. અક્ષિતા, ચિ. ધર્મિષ્ઠા', 'સમસ્ત મિત્ર મંડળ'] },
        { t: 'મોસાળ પક્ષ', list: ['શ્રી અશ્વિનભાઈ કડવાભાઈ ચૌહાણ', 'શ્રી નિલેશભાઈ કડવાભાઈ ચૌહાણ'] },
        { t: 'બાણેજ પક્ષ', list: ['દિવ્યાંશી, દક્ષિતા, પ્રિયાંશ'] },
        { t: 'ફર્મ', list: ['ઓનસ્ટ મોબાઈલ, સણોસરા', 'એ. જે. ઈન્વિટેશન'] },
      ],
    },
    rsvp: {
      title: 'આપની રાહ જોઈએ છીએ', sub: 'આપની હાજરી જ અમારા માટે સૌથી મોટી ભેટ છે.',
      wa: 'વોટ્સએપ પર શુભેચ્છા પાઠવો (RSVP)', call: 'સંપર્ક',
      msg: 'નમસ્તે, ચિ. કિશન સંગ ચિ. પુરન ના શુભ લગ્ન પ્રસંગે હાર્દિક શુભેચ્છાઓ!',
    },
    footer: 'પ્રેમ અને આશીર્વાદ સહ',
  },

  en: {
    intro: {
      suspense: ['Moonlight has dressed a story with two names…', 'One promise, two lives entwined…', 'A new love story blooms with seven sacred steps…', 'The celebration of Kishan and Purna is almost here…'],
      tap: 'Tap the envelope to open your invitation', skip: 'Skip',
    },
    hero: {
      initials: 'K & P', eyebrow: 'The Wedding Of', g: 'Kishan', and: '&', b: 'Puran',
      date: 'Thursday, 28 January 2027', place: '', cdTitle: 'Counting down to the big moment',
      units: ['Days', 'Hours', 'Minutes', 'Seconds'], cdDone: 'The celebration has begun 🎉', scroll: 'Scroll down',
    },
    invite: {
      ganesh: '॥ Shri Ganeshaya Namah ॥', sh1: SH1_EN, sh2: SH2_EN, title: 'Vivah Sanskar',
      intro: 'Dear family and friends, it gives us immense joy to announce the wedding of our beloved',
      blessing: 'We humbly request you to join us with your family, bless the newlyweds, and make our happiness complete.',
      quote: 'The union of two hearts, the coming together of two families… your presence will turn our joy into a celebration.',
    },
    schedule: {
      title: 'Celebration Schedule',
      days: [
        { label: 'Day One', date: 'Wednesday, 27 January 2027', items: [
          { time: '9:15 AM', icon: '🪔', title: 'Mandap Muhurat' },
          { time: '10:00 PM', icon: '🌼', title: 'Haldi Ceremony', desc: 'Followed by a festive lunch — we request your presence.' },
          { time: '11:30 PM', icon: '🍽️', title: 'Lunch', desc: 'Prem Raas evening' },
          { time: '9:30 PM', icon: '🪕', title: 'Raas-Garba', desc: 'Prem Raas' },
        ] },
        { label: 'Day Two', date: 'Thursday, 28 January 2027', items: [
          { time: '7:00 AM', icon: '🎺', title: 'Jaan Prasthan', desc: 'Departing from Surat' },
          { time: '10:00 PM', icon: '💍', title: 'Hast Melap', desc: 'At the auspicious Choghadiya' },
          { time: '11:30 PM', icon: '🍽️', title: 'Wedding Lunch' },
        ] },
      ],
    },
    kalrav: { title: 'Sweet Words', msg: 'On this auspicious occasion, your presence — filled with love and affection — is a blessing to us. We eagerly await you.', sender: '– With warm regards, all our loved ones' },
    venue: { title: 'The Venue', name: 'Sanosara', lines: ['Kherana Road', 'Chotila, Surendranagar.'], btnMap: 'View location on Google Maps' },
    venue2: { title: 'The Venue', name: 'Samadhiyala', lines: ['Samadhiyala', 'Vinchhiya.'], btnMap: 'View location on Google Maps' },
    family: {
      title: 'With Love From',
      cards: [
        { t: 'Hosts', list: ['Mr. Vashrambhai Chhaganbhai Parmar', 'Address: Sanosara, Ta-Chotila, Surendranagar'] },
        { t: 'Affectionately Yours', list: ['Mr. Virajibhai Chhaganbhai Parmar', 'Mr. Vashrambhai Chhaganbhai Parmar', 'Mr. Bhupatbhai Chhaganbhai Parmar', 'Mr. Sanjaybhai Virajibhai Parmar', 'Mr. Jasmatbhai Virajibhai Parmar', 'Mr. Vishalbhai Vashrambhai Parmar'] },
        { t: 'Eager to Welcome You', list: ['Pradip, Akshit', 'Ankita, Urmila, Akshita, Dharmistha', 'All our friends'] },
        { t: "Maternal Family (Mosal)", list: ['Mr. Ashvinbhai Kadvabhai Chauhan', 'Mr. Nileshbhai Kadvabhai Chauhan'] },
        { t: 'Banej Side', list: ['Divyanshi, Dakshita, Priyansh'] },
        { t: 'Firm', list: ['Honest Mobile, Sanosara', 'A. J. Invitations'] },
      ],
    },
    rsvp: {
      title: 'We Await You', sub: 'Your presence is the greatest gift for us.',
      wa: 'Send your wishes on WhatsApp (RSVP)', call: 'Call',
      msg: 'Namaste, heartfelt wishes on the auspicious wedding of Kishan & Puran!',
    },
    footer: 'With love & blessings',
  },
}
