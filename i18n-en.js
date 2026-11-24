/* English interface. Loaded on every page; it only acts when the player chose English.
   The lexicon itself (French and English words, flag meanings…) is never translated:
   only the interface around it. */
(function () {
  var lang = 'fr';
  try { lang = (JSON.parse(localStorage.getItem('lexmarin.v1')) || {}).lang || 'fr'; } catch (e) {}
  if (lang !== 'en') return;
  document.documentElement.lang = 'en';

  var RANK = { 'Moussaillon': 'Cabin boy', 'Matelot': 'Deckhand', 'Quartier-maître': 'Quartermaster', 'Bosco': 'Bosun', 'Second': 'First mate', 'Capitaine': 'Captain', 'Commandant': 'Commander', 'Amiral': 'Admiral' };
  var EN = {
    // navigation & header
    'Lexique marin': 'Sailing lexicon', 'Accueil': 'Home', 'Quiz': 'Quiz', 'Signaux': 'Signals', 'Lexique': 'Lexicon', 'Progrès': 'Progress',
    'Milles parcourus (points)': 'Nautical miles (points)', "Jours d'affilée": 'Days in a row', 'Couper le son': 'Mute', 'Activer le son': 'Unmute', 'Son': 'Sound', 'Navigation': 'Navigation',
    // first launch
    'Bienvenue à bord !': 'Welcome aboard!',
    'Apprends le vocabulaire marin en anglais et en français, gagne des milles et grimpe les grades. Pour commencer, dis-nous ton prénom.': 'Learn sailing vocabulary in French and English, earn nautical miles and climb the ranks. To start, tell us your first name.',
    'Jouer': 'Play', 'Ton prénom': 'Your first name',
    'Pas d’inscription. Ton prénom et tes points apparaissent dans le top 3 si tu montes sur le podium.': 'No sign-up. Your first name and points appear in the top 3 if you make the podium.',
    'J’ai déjà joué sur un autre téléphone': 'I have already played on another phone', 'Version française': 'Version française', 'English version': 'English version',
    // home
    'milles': 'miles', 'objectif du jour': 'daily goal', 'mots vus': 'words seen',
    'Défi du jour : les mêmes 10 questions pour tous, points doublés': 'Daily challenge: the same 10 questions for everyone, double points',
    'Les 3 meilleurs marins': 'Top 3 sailors', 'Semaine': 'Week', 'Défi du jour': 'Daily challenge', 'Mots': 'Words', 'Total': 'Total',
    'Remise à zéro lundi à 0 h, dans': 'Resets Monday at midnight, in', 'Nouveau défi dans': 'New challenge in', 'Le défi du jour se termine dans': 'Today’s challenge ends in',
    'Tu es sur le podium, bravo !': 'You are on the podium, well done!', 'Une place t’attend sur le podium.': 'A podium spot is waiting for you.',
    'Chargement du classement…': 'Loading the leaderboard…', 'Classement injoignable pour le moment (connexion ?).': 'Leaderboard unreachable right now (connection?).',
    'Hors connexion : le classement reviendra avec le réseau. Tes points seront envoyés automatiquement.': 'Offline: the leaderboard will come back with the network. Your points will be sent automatically.',
    'Le classement commun arrive bientôt.': 'The shared leaderboard is coming soon.',
    'Personne n’a encore relevé le défi du jour : à toi de commencer !': 'Nobody has taken today’s challenge yet: you go first!', 'Personne cette semaine : prends la tête !': 'Nobody this week: take the lead!',
    'Personne encore : termine un quiz pour prendre la tête !': 'Nobody yet: finish a quiz to take the lead!',
    'Mot anglais': 'English word', 'Je lis le mot anglais, je trouve le français': 'Read the English word, find the French',
    'Mot français': 'French word', 'Je lis le mot français, je trouve l’anglais': 'Read the French word, find the English',
    'Photo seule': 'Picture only', 'Je vois l’image, je trouve le mot': 'See the picture, find the word',
    'À l’oreille': 'By ear', 'J’écoute le mot anglais, je trouve l’image': 'Listen to the French word, find the picture',
    'Cartes mémoire': 'Flashcards', 'Sur iPhone :': 'On iPhone:',
    'dans Safari, touche Partager puis « Sur l’écran d’accueil » pour l’ouvrir comme une app.': 'in Safari, tap Share then “Add to Home Screen” to open it like an app.',
    'OK': 'OK', 'Badges': 'Badges', 'C’est le bon moment pour ne pas les oublier.': 'Now is the right time not to forget them.', 'Réviser': 'Review',
    'Pavillons, flammes, balisage, feux de nuit, détresse et alphabet VHF : lexique et quiz': 'Flags, pennants, buoyage, night lights, distress and VHF alphabet: lexicon and quiz',
    // badges
    'Premier bord': 'First tack', 'Finir un premier quiz': 'Finish a first quiz', 'Sans faute': 'Flawless', '100 % sur 10 questions ou plus': '100 % on 10 questions or more',
    'Vent arrière': 'Running free', 'Enchaîner 10 bonnes réponses': 'Get 10 right answers in a row', 'Œil de lynx': 'Eagle eye', 'Maîtriser 30 % des mots en mode photo': 'Master 30 % of words in picture mode',
    'Plume de capitaine': 'Captain’s pen', '20 bonnes réponses écrites': '20 correct typed answers', 'Rafale': 'Gust', '15 bonnes réponses en Chrono': '15 right answers in Chrono',
    'Fidèle au poste': 'Always on watch', 'Jouer 3 jours d’affilée': 'Play 3 days in a row', 'Une semaine en mer': 'A week at sea', 'Jouer 7 jours d’affilée': 'Play 7 days in a row',
    'Tour complet': 'Full tour', 'Rencontrer les 104 mots': 'Meet all 104 words', 'Repêché': 'Fished out', 'Réussir un mot raté auparavant': 'Get right a word you missed before',
    'Défi relevé': 'Challenge met', 'Réussir le défi du jour': 'Pass the daily challenge', 'Atteindre 2 500 milles': 'Reach 2,500 miles',
    'Code des signaux': 'Signal code', 'Sans faute sur 10 pavillons ou plus': 'Flawless on 10 flags or more', 'Grand navigateur': 'Great navigator', 'Atteindre la dernière escale du voyage': 'Reach the last port of the voyage',
    // play tab
    'Le voyage': 'The voyage', '7 escales de Saint-Malo à Bilbao, à débloquer': '7 ports of call from Saint-Malo to Bilbao, to unlock',
    'Phrases en situation': 'Real-life phrases', 'VHF, port, navigation : trouve le mot qui manque': 'VHF, harbour, navigation: find the missing word',
    'Duel à deux': 'Two-player duel', 'Sur le même téléphone, chacun son tour': 'On the same phone, taking turns',
    'Préparer le quiz des mots': 'Set up the word quiz', 'Choisis ce que tu vois et ce que tu dois trouver.': 'Choose what you see and what you must find.',
    'Je vois': 'I see', 'J’entends': 'I hear', 'Je dois trouver': 'I must find', 'Le français': 'The French', 'L’anglais': 'The English', 'La photo': 'The picture',
    'Format': 'Format', '4 choix': '4 choices', 'J’écris': 'I type', 'Chrono 60 s': 'Chrono 60 s',
    '10 milles par bonne réponse, bonus de vitesse et de série.': '10 miles per right answer, plus speed and streak bonuses.',
    'Points doublés : tu tapes la réponse. Les petites fautes de frappe sont tolérées.': 'Double points: you type the answer. Small typos are accepted.',
    'Nombre de questions': 'Number of questions', 'Thèmes': 'Themes', '(aucun = tous)': '(none = all)', 'Larguer les amarres': 'Cast off',
    'Les mots que tu connais le moins reviennent plus souvent.': 'The words you know least come back more often.',
    'Le bateau': 'The boat', 'Dimensions et navigation': 'Dimensions & navigation', 'Manœuvres': 'Manoeuvres', 'Mouillage et équipement': 'Anchoring & equipment',
    'Motorisation': 'Engines', 'Météo et mer': 'Weather & sea', 'Port et administratif': 'Harbour & paperwork',
    // lexicon
    'Liste': 'List', 'Tous': 'All', 'Chercher en français ou en anglais': 'Search in French or English', 'Chercher un mot': 'Search a word',
    'Crédits des photos': 'Photo credits', 'Photos : Wikipédia et Wikimedia Commons, chacune sous sa licence libre. Les dessins ont été réalisés pour cette app.': 'Photos: Wikipedia and Wikimedia Commons, each under its free licence. The drawings were made for this app.',
    'Aucun mot ne correspond.': 'No matching word.', 'Comment ça s’appelle ?': 'What is it called?', 'À revoir': 'Review again', 'Je savais': 'I knew it',
    'Retourner la carte': 'Flip the card', 'Écouter': 'Listen', 'Paquet terminé !': 'Deck finished!', 'Recommencer': 'Start again',
    // progress
    'Mes progrès': 'My progress', 'La maîtrise monte à chaque bonne réponse et baisse après une erreur. Elle compare tes trois façons de reconnaître un mot.': 'Mastery goes up with each right answer and down after a mistake. It compares the ways you recognise a word.',
    'Depuis l’anglais': 'From English', 'Depuis le français': 'From French', 'Depuis la photo': 'From the picture', 'pas encore joué': 'not played yet',
    'Pavillons': 'Flags', 'Flammes numériques': 'Numeral pennants', 'Balisage (région A)': 'Buoyage (region A)', 'Feux de nuit': 'Night lights', 'Détresse': 'Distress', 'Épeler à la VHF': 'Spelling on the VHF',
    'Par thème': 'By theme', 'Mots difficiles': 'Hard words', 'Aucun pour le moment. Les mots ratés apparaîtront ici.': 'None for now. Missed words will appear here.', 'Réviser ces mots': 'Review these words',
    'Carnet de bord': 'Logbook', 'quiz joués': 'quizzes played', 'record Chrono': 'Chrono record', 'jours d’affilée': 'days in a row',
    'Changer de téléphone': 'Change phone', 'Crée un code sur ce téléphone, puis tape-le sur le nouveau : tes milles, grades, badges et révisions te suivent. Le code est valable 15 minutes et ne sert qu’une fois.': 'Create a code on this phone, then type it on the new one: your miles, ranks, badges and reviews follow you. The code lasts 15 minutes and works once.',
    'Créer un code': 'Create a code', 'J’ai un code': 'I have a code', 'Création du code…': 'Creating the code…',
    'À taper sur le nouveau téléphone dans les 15 minutes : « J’ai déjà joué sur un autre téléphone ».': 'Type it on the new phone within 15 minutes: “I have already played on another phone”.',
    'Changer de prénom': 'Change first name', 'Remettre à zéro ma progression': 'Reset my progress', 'Ta progression reste sur cet appareil, dans ce navigateur.': 'Your progress stays on this device, in this browser.',
    'Langue': 'Language', 'Récupérer ma progression': 'Restore my progress', 'Annuler': 'Cancel', 'Récupérer': 'Restore', 'Code de transfert': 'Transfer code',
    'Sur l’ancien téléphone : onglet Progrès, « Créer un code ».': 'On the old phone: Progress tab, “Create a code”.',
    'Sur l’ancien téléphone : onglet Progrès, « Créer un code ». La progression actuelle de ce téléphone sera remplacée.': 'On the old phone: Progress tab, “Create a code”. This phone’s current progress will be replaced.',
    'Le code fait 6 caractères.': 'The code has 6 characters.', 'Code inconnu ou expiré.': 'Unknown or expired code.', 'Code invalide.': 'Invalid code.', 'Réseau indisponible.': 'Network unavailable.',
    'Il faut du réseau pour créer un code.': 'You need a network connection to create a code.', 'Connexion impossible, réessaie dans un instant.': 'Cannot connect, try again in a moment.',
    'Création du code impossible, réessaie.': 'Could not create the code, try again.', 'Classement non configuré.': 'Leaderboard not configured.',
    'Nouveau prénom': 'New first name', 'Confirmer': 'Confirm', 'Tout remettre à zéro ?': 'Reset everything?', 'Milles, badges et maîtrise des mots seront effacés de cet appareil.': 'Miles, badges and word mastery will be erased from this device.',
    'Prénom changé': 'First name changed', 'Progression remise à zéro': 'Progress reset',
    // signals
    'Flammes': 'Pennants', 'Balisage': 'Buoyage', 'Épeler (VHF)': 'Spell (VHF)',
    'Les noms (Alfa, Bravo…) sont ceux de l’alphabet phonétique international, utilisé aussi à la VHF. Source : Code international des signaux (OMI).': 'The names (Alfa, Bravo…) come from the international phonetic alphabet, also used on the VHF. Source: International Code of Signals (IMO).',
    'Pavillon → sens': 'Flag → meaning', 'Pavillon → sens EN': 'Flag → meaning (EN)', 'Sens → pavillon': 'Meaning → flag', 'Pavillon → nom': 'Flag → name', 'Mélange': 'Mix',
    'Nombre de pavillons': 'Number of flags', 'Tous (27)': 'All (27)', 'Hisser les couleurs': 'Hoist the colours',
    '10 milles par bonne réponse, bonus de vitesse et de série. Les pavillons que tu connais le moins reviennent plus souvent.': '10 miles per right answer, plus speed and streak bonuses. The flags you know least come back more often.',
    'Image → nom': 'Picture → name', 'Image → nom anglais': 'Picture → English name', 'Nom → image': 'Name → picture', 'C’est parti': 'Let’s go',
    'Les chiffres': 'Figures', 'Touche un nom de bateau dans le quiz pour l’entendre épelé.': 'Tap a boat name in the quiz to hear it spelt.',
    'Mot → épellation': 'Word → spelling', 'Épellation → mot': 'Spelling → word',
    'Les flammes numériques du Code international transmettent des chiffres (cap, distance, heure…). À la radio, chaque chiffre a son nom de code.': 'The numeral pennants of the International Code send figures (course, distance, time…). On the radio, each figure has its code word.',
    'Balisage AISM, région A (Europe, Afrique, Asie) : rouge à bâbord en entrant au port. Les cardinales indiquent de quel côté passer.': 'IALA buoyage, region A (Europe, Africa, Asia): red to port when entering harbour. Cardinal marks show which side to pass.',
    'La nuit, les feux indiquent le type de navire et ce qu’il fait (COLREG). Vu de face, son feu vert est à ta gauche et son rouge à ta droite.': 'At night, lights show the type of vessel and what it is doing (COLREG). Seen head-on, its green light is on your left and its red on your right.',
    'Signaux de détresse reconnus (COLREG, annexe IV). N’importe lequel signifie : je suis en danger et j’ai besoin d’aide immédiate.': 'Recognised distress signals (COLREG, Annex IV). Any of them means: I am in danger and need immediate help.',
    'À la radio, on épelle avec l’alphabet phonétique international : NEMO se dit November Echo Mike Oscar.': 'On the radio, you spell with the international phonetic alphabet: NEMO is November Echo Mike Oscar.',
    // quizzes
    'Comment dit-on en anglais ?': 'How do you say it in English?', 'Comment dit-on en français ?': 'How do you say it in French?', 'Quelle image correspond ?': 'Which picture matches?',
    'Quelle image correspond au mot entendu ?': 'Which picture matches the word you heard?', 'Quel mot as-tu entendu ?': 'Which word did you hear?', 'Écris le mot entendu (en anglais)': 'Type the word you heard (in English)',
    'Touche pour réécouter': 'Tap to listen again', 'Réécouter le mot': 'Listen again', 'Image à reconnaître': 'Picture to recognise',
    'Je ne sais pas': 'I don’t know', 'Quitter le quiz': 'Leave the quiz', 'Quitter': 'Leave', 'Anglais': 'English', 'Français': 'French',
    'Raté…': 'Missed…', 'Bravo !': 'Well done!', 'Exact !': 'Correct!', 'Bien joué !': 'Nice one!', 'Parfait !': 'Perfect!', 'Bien vu !': 'Spot on!', 'Presque parfait !': 'Almost perfect!',
    'Pas de souci, voici la réponse': 'No worries, here is the answer', 'Continuer': 'Continue', 'Voir mon résultat': 'See my result', 'Voir le résultat': 'See the result',
    'Valider': 'Check', 'Réponse en anglais': 'Answer in English', 'Réponse en français': 'Answer in French', 'Résultat': 'Result',
    'Sans faute, capitaine !': 'Flawless, captain!', 'Excellent quart !': 'Excellent watch!', 'Bonne navigation': 'Good sailing', 'Mer agitée, on continue': 'Rough sea, keep going', 'On reprend la barre ensemble': 'Let’s take the helm again together',
    'milles gagnés': 'miles earned', 'bonnes réponses': 'right answers', 'réussite': 'success', 'meilleure série': 'best streak',
    'Rejouer': 'Play again', 'Défier un ami': 'Challenge a friend', 'Revoir ces mots maintenant': 'Review these words now', 'Retour à l’accueil': 'Back to home', 'Retour à la carte': 'Back to the map', 'Retour': 'Back',
    'Quitter le quiz ?': 'Leave the quiz?', 'Les milles déjà gagnés sont conservés.': 'Miles already earned are kept.', 'Quitter ?': 'Leave?', 'La partie en cours sera perdue.': 'The current game will be lost.',
    'Message copié, colle-le à un ami': 'Message copied, paste it to a friend', 'Message à envoyer': 'Message to send',
    'Quel mot complète la phrase ?': 'Which word completes the sentence?', 'Sans faute !': 'Flawless!', 'Excellent !': 'Excellent!', 'Bien joué': 'Well played', 'Ça progresse': 'Getting better', 'On révise et on recommence': 'Review and try again',
    'Que signifie ce pavillon ?': 'What does this flag mean?', 'What does this flag mean? (en anglais)': 'What does this flag mean? (in English)', 'Comment s’appelle ce pavillon ?': 'What is this flag called?',
    'Quel pavillon a ce sens ?': 'Which flag has this meaning?', 'Quiz pavillons': 'Flag quiz', 'Voir le lexique': 'See the lexicon',
    'Pavois complet, bravo !': 'Full dress ship, well done!', 'Excellent signaleur !': 'Excellent signaller!', 'Bonne lecture des signaux': 'Good signal reading', 'Encore quelques pavillons à hisser': 'A few more flags to hoist', 'On révise le lexique et on recommence': 'Review the lexicon and try again',
    'What is it called? (en anglais)': 'What is it called? (in English)', 'Comment l’épeler à la radio ?': 'How do you spell it on the radio?', 'Quel nom de bateau a été épelé ?': 'Which boat name was spelt?',
    'Promotion': 'Promotion', 'Merci, capitaine': 'Thank you, captain', 'Tu as atteint le plus haut grade. Respect, Amiral !': 'You reached the highest rank. Respect, Admiral!', 'Grade maximal atteint, bravo !': 'Highest rank reached, well done!',
    // voyage & duel
    'Le quiz d’une escale mélange photos, mots français et anglais sur son thème. Tu peux rejouer les escales déjà atteintes.': 'A port’s quiz mixes pictures, French and English words on its theme. You can replay ports you have already reached.',
    'Carte du voyage': 'Voyage map', 'Duel': 'Duel', 'Deux joueurs sur le même téléphone, chacun son tour : 5 questions chacun. Les points du duel ne comptent pas dans le classement.': 'Two players on the same phone, taking turns: 5 questions each. Duel points do not count in the leaderboard.',
    'Joueur 1': 'Player 1', 'Joueur 2': 'Player 2', 'Thème': 'Theme', 'Que le meilleur gagne': 'May the best sailor win', 'Égalité parfaite !': 'Perfect tie!', 'Revanche': 'Rematch', 'Équipier': 'Crewmate',
    'Touche un mot pour voir sa fiche, ou le haut-parleur pour l’écouter.': 'Tap a word to see its card, or the speaker to listen.',
    'La voix n’est pas disponible sur cet appareil.': 'Voice is not available on this device.', 'Pas de son ? Désactive le mode silencieux de l’iPhone et monte le volume.': 'No sound? Turn off the iPhone’s silent mode and turn up the volume.',
    'Fermer': 'Close', 'Maîtrise': 'Mastery', 'Dessin réalisé pour cette app.': 'Drawing made for this app.', 'Voir la fiche du mot': 'See the word card',
    'Tester le son': 'Test the sound', 'Si le haut-parleur ne donne rien, touche les boutons un par un et regarde ce qui s’affiche.': 'If the speaker gives nothing, tap the buttons one by one and look at what appears.',
    'Bip': 'Beep', 'Voix (par défaut)': 'Voice (default)', 'Voix anglaise': 'English voice', 'Voix française': 'French voice', 'Termine le quiz d’abord': 'Finish the quiz first',
    'Choix 1': 'Choice 1', 'Choix 2': 'Choice 2', 'Choix 3': 'Choice 3', 'Choix 4': 'Choice 4', 'Écouter en anglais': 'Listen in English', 'Écouter la prononciation': 'Listen to the pronunciation'
  };
  function rank(r) { return RANK[r] || r; }
  function T(s) { return EN[s] || s; }
  var N = '([\\d\\u202f\\u00a0 ,.]+)';
  var RULES = [
    [new RegExp('^' + N + ' milles avant (.+)$'), function (m, n, r) { return n + ' miles to ' + rank(r); }],
    [/^(.+), ton grade$/, function (m, n) { return n + ', your rank'; }],
    [/^ton grade$/, 'your rank'],
    [new RegExp('^Toi : ' + N + ' milles\\. (.*)$'), function (m, n, rest) { var e = rest.match(new RegExp('^Encore ' + N + ' pour le podium\\.$')); return 'You: ' + n + ' miles. ' + (e ? e[1] + ' more for the podium.' : T(rest)); }],
    [/^(\d+ j )?(\d+ h )?\d+ min$/, function (m) { return m.replace(' j ', ' d '); }],
    [/^(\d+) mots? à revoir aujourd’hui$/, function (m, n) { return n + (n === '1' ? ' word' : ' words') + ' to review today'; }],
    [/^(\d+) pavillons? à revoir aujourd’hui\.$/, function (m, n) { return n + (n === '1' ? ' flag' : ' flags') + ' to review today.'; }],
    [/^Lance un quiz : ils reviendront en priorité\.$/, 'Start a quiz: they will come first.'],
    [/^Revoir mes erreurs \((\d+)\)$/, 'Review my mistakes ($1)'],
    [new RegExp('^Défi du jour relevé : ' + N + ' milles$'), 'Daily challenge done: $1 miles'],
    [/^Question (\d+) sur (\d+)$/, 'Question $1 of $2'],
    [/^Pavillon (\d+) sur (\d+)$/, 'Flag $1 of $2'],
    [/^Carte (\d+) sur (\d+) · touche la carte pour la retourner$/, 'Card $1 of $2 · tap the card to flip it'],
    [/^(.+) · (\d+) sur (\d+)$/, function (m, t, a, b) { return T(t) + ' · ' + a + ' of ' + b; }],
    [/^(Résultat|Défi du jour|Chrono 60 s|Quiz pavillons|Phrases en situation|Flammes numériques|Balisage \(région A\)|Feux de nuit|Détresse|Épeler à la VHF|Duel) · (.+)$/, function (m, t, n) { return T(t) + ' · ' + n; }],
    [new RegExp('^\\+' + N + ' milles$'), '+$1 miles'],
    [/^À revoir \((\d+)\)$/, 'To review ($1)'],
    [/^Ta réponse : (.*)$/, 'Your answer: $1'],
    [/^Nouveau badge : (.+)$/, function (m, b) { return 'New badge: ' + T(b); }],
    [/^Indice \((\d+)\)$/, 'Hint ($1)'],
    [/^Réponds au plus vite : \+2 s par bonne réponse, −3 s par erreur\. Record : (\d+) bonnes réponses\.$/, 'Answer as fast as you can: +2 s per right answer, −3 s per mistake. Record: $1 right answers.'],
    [/^(.+) !$/, function (m, r) { return RANK[r] ? RANK[r] + '!' : m; }],
    [new RegExp('^Prochain grade : (.+) à ' + N + ' milles\\.$'), function (m, r, n) { return 'Next rank: ' + rank(r) + ' at ' + n + ' miles.'; }],
    [/^Escale débloquée : (.+)$/, 'Port unlocked: $1'],
    [/^Chaque escale est un thème du lexique\. Réussis son quiz à 80 % pour lever l’ancre vers l’escale suivante\. Escale (\d+) sur (\d+)\.$/, 'Each port of call is a lexicon theme. Score 80 % on its quiz to weigh anchor for the next one. Port $1 of $2.'],
    [/^(\d+) questions\. Les points comptent dans le classement Signaux\.$/, '$1 questions. Points count in the Signals leaderboard.'],
    [/^(.*) Maîtrisé à (\d+) %\.$/, function (m, t, n) { return T(t) + ' Mastered: ' + n + ' %.'; }],
    [/^Code international des signaux : hissé seul, chaque pavillon a un sens précis, le même dans toutes les langues\. (\d+) pavillons, maîtrisés à (\d+) %\.$/, 'International Code of Signals: hoisted alone, each flag has a precise meaning, the same in every language. $1 flags, $2 % mastered.'],
    [/^(\d+) mots$/, '$1 words'],
    [/^(\d+) % de réussite · (\d+) rép\.$/, '$1 % correct · $2 answers'],
    [/^(\d+) erreurs?$/, function (m, n) { return n + (n === '1' ? ' mistake' : ' mistakes'); }],
    [/^À toi, (.+) !$/, 'Your turn, $1!'],
    [/^(.+) · (\d+) bonnes réponses$/, '$1 · $2 right answers'],
    [/^(.+) gagne le duel !$/, '$1 wins the duel!'],
    [/^Escale (\d+), (.+)$/, 'Port of call $1, $2'],
    [/^Maîtrise (\d)\/5$/, 'Mastery $1/5'],
    [/^Écouter (.+)$/, 'Listen to $1'],
    [/^Retirer (.+) du classement$/, 'Remove $1 from the leaderboard'],
    [/^Nouveau record Chrono : (\d+)$/, 'New Chrono record: $1'],
    [/^Progression récupérée, bon retour à bord (.+) !$/, 'Progress restored, welcome back aboard $1!'],
    [/^Orthographe exacte : (.+)$/, 'Exact spelling: $1'],
    [/^(.+) · verrouillée$/, function (m, t) { return T(t) + ' · locked'; }],
    [/^(\d+) mots, en français et en anglais britannique\. Touche un mot pour voir sa fiche, ou le haut-parleur pour l’écouter\.$/, '$1 words, in French and British English. Tap a word to see its card, or the speaker to listen (in French).'],
    [/^Fiche du mot (.+)$/, 'Word card: $1'],
    [/^(\d+) cartes revues\.$/, '$1 cards reviewed.'],
    [/^(\d+) pavillons$/, '$1 flags']
  ];
  function tr(s) {
    var k = s.replace(/\s+/g, ' ').trim();
    if (!k) return s;
    var out = null;
    if (EN[k]) out = EN[k];
    else if (RANK[k]) out = RANK[k];
    else for (var i = 0; i < RULES.length; i++) {
      var m = k.match(RULES[i][0]);
      if (m) { var f = RULES[i][1]; out = typeof f === 'function' ? f.apply(null, m) : k.replace(RULES[i][0], f); if (out === k) out = null; else break; }
    }
    if (out == null) return s;
    var lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0];
    return lead + out + trail;
  }
  var ATTRS = ['placeholder', 'aria-label', 'title'];
  function walk(node) {
    if (node.nodeType === 3) { var p = node.parentNode; if (!p || /^(SCRIPT|STYLE)$/.test(p.nodeName) || (p.closest && p.closest('[translate="no"]'))) return; var v = tr(node.nodeValue); if (v !== node.nodeValue) node.nodeValue = v; return; }
    if (node.nodeType !== 1 || /^(SCRIPT|STYLE)$/.test(node.nodeName)) return;
    if (node.getAttribute && node.getAttribute('translate') === 'no') return;
    for (var a = 0; a < ATTRS.length; a++) { var at = node.getAttribute(ATTRS[a]); if (at) { var t = tr(at); if (t !== at) node.setAttribute(ATTRS[a], t); } }
    for (var c = node.firstChild; c; c = c.nextSibling) walk(c);
  }
  var mo = new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === 'characterData') walk(m.target);
      else if (m.type === 'attributes') walk(m.target);
      else for (var j = 0; j < m.addedNodes.length; j++) walk(m.addedNodes[j]);
    }
  });
  function start() { walk(document.body); mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS }); }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  window.LM_T = tr;
})();
