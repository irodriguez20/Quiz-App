// In-memory database of questions
const STORE = [
    {
        question: 'What are the Great houses of Game of Thrones?',
        answers: [
            'Stark, Targaryen, Martell, Baelish, Greyjoy, Lannister',
            'Targaryen, Stark, Lannister, Arryn, Tully, Greyjoy, Baratheon, Tyrell, Martell, Bolton',
            'Lannister, Stark, Targaryen, Baratheon,',
            'Stark, Lannister, Targaryen, Dothraki, Tyrell, Baratheon'
        ],
        correctAnswer: 'Targaryen, Stark, Lannister, Arryn, Tully, Greyjoy, Baratheon, Tyrell, Martell, Bolton',
    },
    {
        question: 'Which Great House did the Mad King belong to?',
        answers: [
            'Tyrell',
            'Baratheon',
            'Stark',
            'Targaryen'
        ],
        correctAnswer: 'Targaryen'
    },
    {
        question: 'Who are Jon Snow\'s real parents?',
        answers: [
            'Eddard Stark & a mistress',
            'Robb Stark & Daenerys Targaryen',
            'Lyanna Stark & Ned Targaryen',
            'Lyanna Stark & Rhaegar Targaryen'
        ],
        correctAnswer: 'Lyanna Stark & Rhaegar Targaryen'
    },
    {
        question: 'Has the Baratheon blood line been wiped out?',
        answers: [
            'No, it lives on in Robert Baratheon\'s illegitimate son, Gendry.',
            'Yes, Joffrey Baratheon had all the illegitimate children killed before his death.',
            'Yes, all the Baratheon brothers are dead.',
            'No, Stannis Baratheon\'s daughter is still alive.'
        ],
        correctAnswer: 'No, it lives on in Robert Baratheon\'s illegitimate son, Gendry.'
    },
    {
        question: 'What happens at the Red Wedding?',
        answers: [
            'King Robb Stark, Queen Talisa Stark & Lady Catelyn Stark are among those murdered during the massacre.',
            'The Red Witch and Gendry Baratheon are married.',
            'Sansa Stark is forced to marry Tyrion Lannister.',
            'Sansa Stark agrees to marry Ramsay Bolton.'
        ],
        correctAnswer: 'King Robb Stark, Queen Talisa Stark & Lady Catelyn Stark are among those murdered during the massacre.'
    },
    {
        question: 'Which of Daenerys\' dragons did the Night King kill?',
        answers: [
            'Rhaegal',
            'Drogon',
            'Viserian',
            'Balerion'
        ],
        correctAnswer: 'Viserian'
    },
    {
        question: 'Who is the Red Witch?',
        answers: [
            'Tyene',
            'Ygritte',
            'Shae',
            'Melisandre'
        ],
        correctAnswer: 'Melisandre'
    },
    {
        question: 'How did Kahl Drogo die?',
        answers: [
            'Visery\'s Targaryen pours hot melted gold over Kahl Drogo\'s head.',
            'Daario Naharis is jealous & murders him in his sleep.',
            'Daenerys stabs him in his sleep.',
            'Daenerys smothers him with a pillow to end his suffering.'
        ],
        correctAnswer: 'Daenerys smothers him with a pillow to end his suffering.'
    },
    {
        question: 'Who was Jon Snow\'s first love?',
        answers: [
            'Daenerys',
            'Ygritte',
            'Margaery',
            'Shae'
        ],
        correctAnswer: 'Ygritte'
    },
    {
        question: 'What was Tyrion\'s advice to Jon Snow when the first met?',
        answers: [
            'A Lannister always pays his debts.',
            'A mind needs books like a sword needs a whetstone.',
            'Every time we deal with an enemy, we create two more.',
            'Never forget what you are. The rest of the world will not. Wear it like armor & it can never be used to hurt you.'
        ],
        correctAnswer: 'Never forget what you are. The rest of the world will not. Wear it like armor & it can never be used to hurt you.'
    }
];
