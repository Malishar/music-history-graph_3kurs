import React, { useState, useEffect } from 'react';
import { bandsData } from '../data/bandsData';

const QuizDialog = ({ isOpen, onClose, groups }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Все 40 вопросов (база)
  const allPossibleQuestions = [
    // The Beatles
    {
      question: "В каком городе образовалась группа The Beatles?",
      options: ["Ливерпуль", "Лондон", "Манчестер", "Бирмингем"],
      correct: "Ливерпуль",
      explanation: "The Beatles образовались в Ливерпуле в 1960 году",
      category: "The Beatles"
    },
    {
      question: "Какой альбом The Beatles называют 'Белым альбомом'?",
      options: ["The Beatles", "Abbey Road", "Revolver", "Sgt. Pepper's"],
      correct: "The Beatles",
      explanation: "Двойной альбом The Beatles 1968 года известен как 'Белый альбом'",
      category: "The Beatles"
    },
    {
      question: "Кто из The Beatles был бас-гитаристом?",
      options: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
      correct: "Paul McCartney",
      explanation: "Пол Маккартни играл на бас-гитаре",
      category: "The Beatles"
    },
    
    // Queen
    {
      question: "Как звали вокалиста Queen?",
      options: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
      correct: "Freddie Mercury",
      explanation: "Фредди Меркьюри был вокалистом Queen до своей смерти в 1991 году",
      category: "Queen"
    },
    {
      question: "Какой хит Queen содержит оперные вставки?",
      options: ["Bohemian Rhapsody", "We Will Rock You", "Radio Ga Ga", "Don't Stop Me Now"],
      correct: "Bohemian Rhapsody",
      explanation: "Bohemian Rhapsody — шедевр Queen 1975 года",
      category: "Queen"
    },
    {
      question: "В каком году умер Фредди Меркьюри?",
      options: ["1991", "1989", "1993", "1987"],
      correct: "1991",
      explanation: "Фредди Меркьюри умер от пневмонии на фоне СПИДа в 1991 году",
      category: "Queen"
    },
    
    // Metallica
    {
      question: "Какой басист Metallica трагически погиб в 1986 году?",
      options: ["Cliff Burton", "Jason Newsted", "Robert Trujillo", "Ron McGovney"],
      correct: "Cliff Burton",
      explanation: "Клифф Бертон погиб в автокатастрофе во время тура в Швеции",
      category: "Metallica"
    },
    {
      question: "Какой альбом Metallica считается их шедевром?",
      options: ["Master of Puppets", "Kill 'Em All", "Ride the Lightning", "And Justice for All"],
      correct: "Master of Puppets",
      explanation: "Master of Puppets (1986) — последний альбом с Клиффом Бертоном",
      category: "Metallica"
    },
    {
      question: "Кто основал Megadeth после ухода из Metallica?",
      options: ["Dave Mustaine", "Kirk Hammett", "James Hetfield", "Lars Ulrich"],
      correct: "Dave Mustaine",
      explanation: "Дэйв Мастейн основал Megadeth в 1983 году",
      category: "Metallica"
    },
    
    // Nirvana
    {
      question: "Кто был лидером группы Nirvana?",
      options: ["Kurt Cobain", "Dave Grohl", "Krist Novoselic", "Chad Channing"],
      correct: "Kurt Cobain",
      explanation: "Курт Кобейн был вокалистом, гитаристом и автором песен Nirvana",
      category: "Nirvana"
    },
    {
      question: "В каком году вышел альбом Nevermind?",
      options: ["1991", "1989", "1993", "1987"],
      correct: "1991",
      explanation: "Nevermind вышел в 1991 году и изменил музыкальный мир",
      category: "Nirvana"
    },
    {
      question: "Кто стал барабанщиком Foo Fighters после Nirvana?",
      options: ["Dave Grohl", "Taylor Hawkins", "Pat Smear", "Nate Mendel"],
      correct: "Dave Grohl",
      explanation: "Дэйв Грол основал Foo Fighters в 1994 году",
      category: "Nirvana"
    },
    
    // AC/DC
    {
      question: "Какой вокалист AC/DC умер в 1980 году?",
      options: ["Bon Scott", "Brian Johnson", "Angus Young", "Malcolm Young"],
      correct: "Bon Scott",
      explanation: "Бон Скотт умер в 1980 году, после чего AC/DC записали Back in Black с Брайаном Джонсоном",
      category: "AC/DC"
    },
    {
      question: "Какой альбом AC/DC стал самым продаваемым?",
      options: ["Back in Black", "Highway to Hell", "The Razors Edge", "Black Ice"],
      correct: "Back in Black",
      explanation: "Back in Black (1980) — второй самый продаваемый альбом в истории",
      category: "AC/DC"
    },
    {
      question: "Кто является гитаристом AC/DC в школьной форме?",
      options: ["Angus Young", "Malcolm Young", "Brian Johnson", "Bon Scott"],
      correct: "Angus Young",
      explanation: "Ангус Янг известен своей школьной формой на концертах",
      category: "AC/DC"
    },
    
    // Pink Floyd
    {
      question: "Какой альбом Pink Floyd провёл в чартах 937 недель?",
      options: ["The Dark Side of the Moon", "The Wall", "Wish You Were Here", "Animals"],
      correct: "The Dark Side of the Moon",
      explanation: "The Dark Side of the Moon провёл в чартах 937 недель (более 18 лет)",
      category: "Pink Floyd"
    },
    {
      question: "Кто был основателем Pink Floyd?",
      options: ["Syd Barrett", "Roger Waters", "David Gilmour", "Richard Wright"],
      correct: "Syd Barrett",
      explanation: "Сид Барретт основал Pink Floyd, но покинул группу из-за проблем с психикой",
      category: "Pink Floyd"
    },
    {
      question: "Какой альбом Pink Floyd посвящён войне?",
      options: ["The Wall", "The Final Cut", "Animals", "Meddle"],
      correct: "The Final Cut",
      explanation: "The Final Cut (1983) — антивоенный альбом Роджера Уотерса",
      category: "Pink Floyd"
    },
    
    // Led Zeppelin
    {
      question: "Какой гитарист Led Zeppelin считается одним из величайших?",
      options: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
      correct: "Jimmy Page",
      explanation: "Джимми Пейдж — основатель и гитарист Led Zeppelin",
      category: "Led Zeppelin"
    },
    {
      question: "Какая песня Led Zeppelin считается их визитной карточкой?",
      options: ["Stairway to Heaven", "Whole Lotta Love", "Kashmir", "Black Dog"],
      correct: "Stairway to Heaven",
      explanation: "Stairway to Heaven с альбома Led Zeppelin IV — одна из величайших песен в истории",
      category: "Led Zeppelin"
    },
    {
      question: "Какой барабанщик Led Zeppelin умер в 1980 году?",
      options: ["John Bonham", "John Paul Jones", "Robert Plant", "Jimmy Page"],
      correct: "John Bonham",
      explanation: "Джон Бонэм умер в 1980 году, что привело к распаду группы",
      category: "Led Zeppelin"
    },
    
    // Black Sabbath
    {
      question: "Какой вокалист Black Sabbath известен как 'Князь тьмы'?",
      options: ["Ozzy Osbourne", "Ronnie James Dio", "Tony Iommi", "Geezer Butler"],
      correct: "Ozzy Osbourne",
      explanation: "Оззи Осборн получил прозвище 'Князь тьмы'",
      category: "Black Sabbath"
    },
    {
      question: "Какой альбом Black Sabbath считается первым метал-альбомом?",
      options: ["Black Sabbath", "Paranoid", "Master of Reality", "Sabbath Bloody Sabbath"],
      correct: "Black Sabbath",
      explanation: "Дебютный альбом Black Sabbath (1970) считается первым метал-альбомом",
      category: "Black Sabbath"
    },
    {
      question: "Кто был гитаристом Black Sabbath на протяжении всей истории?",
      options: ["Tony Iommi", "Ozzy Osbourne", "Geezer Butler", "Bill Ward"],
      correct: "Tony Iommi",
      explanation: "Тони Айомми — единственный постоянный участник Black Sabbath",
      category: "Black Sabbath"
    },
    
    // Guns N' Roses
    {
      question: "Какой дебютный альбом Guns N' Roses стал самым продаваемым?",
      options: ["Appetite for Destruction", "Use Your Illusion I", "Use Your Illusion II", "G N' R Lies"],
      correct: "Appetite for Destruction",
      explanation: "Appetite for Destruction (1987) — самый продаваемый дебютный альбом в истории",
      category: "Guns N' Roses"
    },
    {
      question: "Как зовут гитариста Guns N' Roses с цилиндром?",
      options: ["Slash", "Axl Rose", "Duff McKagan", "Izzy Stradlin"],
      correct: "Slash",
      explanation: "Слэш известен своим цилиндром и гитарными соло",
      category: "Guns N' Roses"
    },
    {
      question: "Как зовут вокалиста Guns N' Roses?",
      options: ["Axl Rose", "Slash", "Duff McKagan", "Izzy Stradlin"],
      correct: "Axl Rose",
      explanation: "Эксл Роуз — единственный постоянный участник группы",
      category: "Guns N' Roses"
    },
    
    // Rammstein
    {
      question: "Из какой страны группа Rammstein?",
      options: ["Германия", "Австрия", "Швейцария", "Нидерланды"],
      correct: "Германия",
      explanation: "Rammstein из Германии",
      category: "Rammstein"
    },
    {
      question: "Какой главный хит Rammstein?",
      options: ["Du hast", "Ich will", "Sonne", "Mutter"],
      correct: "Du hast",
      explanation: "Du hast — самый известный хит Rammstein",
      category: "Rammstein"
    },
    {
      question: "Чем знамениты концерты Rammstein?",
      options: ["Пиротехникой", "Лазерным шоу", "Водными эффектами", "Воздушными шарами"],
      correct: "Пиротехникой",
      explanation: "Rammstein славятся своей безумной пиротехникой на концертах",
      category: "Rammstein"
    },
    
    // Radiohead
    {
      question: "Какой альбом Radiohead считается шедевром 90-х?",
      options: ["OK Computer", "The Bends", "Kid A", "In Rainbows"],
      correct: "OK Computer",
      explanation: "OK Computer (1997) признан одним из величайших альбомов всех времён",
      category: "Radiohead"
    },
    {
      question: "Как зовут вокалиста Radiohead?",
      options: ["Thom Yorke", "Jonny Greenwood", "Colin Greenwood", "Ed O'Brien"],
      correct: "Thom Yorke",
      explanation: "Том Йорк — вокалист и фронтмен Radiohead",
      category: "Radiohead"
    },
    {
      question: "Какой экспериментальный альбом Radiohead вышел в 2000 году?",
      options: ["Kid A", "Amnesiac", "Hail to the Thief", "The King of Limbs"],
      correct: "Kid A",
      explanation: "Kid A (2000) ознаменовал поворот Radiohead к электронике",
      category: "Radiohead"
    }
  ];

  // Выбираем 20 случайных вопросов при открытии
  useEffect(() => {
    if (!isOpen) return;
    
    setLoading(true);
    
    // Перемешиваем и берем 20
    const shuffled = [...allPossibleQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 20)
    .map(q => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5) // ← ПЕРЕМЕШИВАЕМ ОТВЕТЫ!
    }));

    setQuestions(shuffled);
    setLoading(false);    
    
    // Сброс состояния игры
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    }, [isOpen]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

    const handleRestart = () => {
    // Перемешиваем новые вопросы при перезапуске
    const shuffled = [...allPossibleQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 20)
        .map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5) // ← И ЗДЕСЬ!
        }));
    setQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    };

  if (!isOpen) return null;

  const dialogStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000
  };

  const contentStyle = {
    background: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(196, 30, 58, 0.3)',
    maxWidth: '600px',
    width: '90%',
    color: '#333',
    border: '2px solid #c41e3a',
    textAlign: 'center',
    maxHeight: '80vh',
    overflowY: 'auto'
  };

  const optionStyle = (isSelected, isCorrect) => ({
    padding: '15px',
    margin: '10px 0',
    background: isSelected ? (isCorrect ? '#4ecdc4' : '#c41e3a') : '#f5f5f5',
    color: isSelected ? 'white' : '#333',
    borderRadius: '8px',
    cursor: selectedAnswer ? 'default' : 'pointer',
    transition: 'all 0.2s',
    border: '1px solid transparent'
  });

  const progressStyle = {
    width: '100%',
    height: '4px',
    background: '#f0f0f0',
    borderRadius: '2px',
    marginBottom: '20px'
  };

  const progressFillStyle = {
    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
    height: '100%',
    background: '#c41e3a',
    borderRadius: '2px',
    transition: 'width 0.3s'
  };

  if (loading) {
    return (
      <div style={dialogStyle} onClick={onClose}>
        <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
          <h2 style={{ color: '#c41e3a', marginBottom: '20px' }}>🎸 МУЗЫКАЛЬНАЯ ВИКТОРИНА</h2>
          <p>Загрузка вопросов...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={dialogStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ color: '#c41e3a', marginBottom: '20px' }}>
          {showResult ? '🏆 РЕЗУЛЬТАТ' : '🎸 МУЗЫКАЛЬНАЯ ВИКТОРИНА'}
        </h2>

        {!showResult ? (
          <>
            <div style={progressStyle}>
              <div style={progressFillStyle} />
            </div>
            
            <p style={{ textAlign: 'right', color: '#666', marginBottom: '10px' }}>
              Вопрос {currentQuestion + 1} из {questions.length}
            </p>
            
            <p style={{ textAlign: 'left', color: '#c41e3a', marginBottom: '5px', fontSize: '12px' }}>
              {questions[currentQuestion]?.category}
            </p>
            
            <h3 style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>
              {questions[currentQuestion].question}
            </h3>

            <div>
              {questions[currentQuestion].options.map((option, index) => {
                const isCorrect = option === questions[currentQuestion].correct;
                return (
                  <div
                    key={index}
                    style={optionStyle(selectedAnswer === option, isCorrect)}
                    onClick={() => !selectedAnswer && handleAnswer(option)}
                    onMouseEnter={(e) => {
                      if (!selectedAnswer) {
                        e.currentTarget.style.background = '#e0e0e0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!selectedAnswer) {
                        e.currentTarget.style.background = '#f5f5f5';
                      }
                    }}
                  >
                    {option}
                    {selectedAnswer === option && isCorrect && ' ✓'}
                    {selectedAnswer === option && !isCorrect && ' ✗'}
                  </div>
                );
              })}
            </div>

            {selectedAnswer && (
              <div style={{ marginTop: '20px' }}>
                <p style={{ 
                  color: selectedAnswer === questions[currentQuestion].correct ? '#4ecdc4' : '#c41e3a',
                  marginBottom: '10px',
                  fontWeight: 'bold'
                }}>
                  {selectedAnswer === questions[currentQuestion].correct ? '✅ Правильно!' : '❌ Неправильно!'}
                </p>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
                  {questions[currentQuestion].explanation}
                </p>
                <button
                  onClick={handleNext}
                  style={{
                    background: '#c41e3a',
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '30px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 5px 0 #8b0000',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#a01830';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#c41e3a';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  {currentQuestion + 1 < questions.length ? 'СЛЕДУЮЩИЙ ВОПРОС →' : 'УЗНАТЬ РЕЗУЛЬТАТ'}
                </button>
              </div>
            )}
          </>
        ) : (
          <div>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>
              {score === questions.length ? '🏆' : score >= questions.length/2 ? '👍' : '😐'}
            </div>
            
            <h3 style={{ fontSize: '24px', marginBottom: '10px', color: '#c41e3a' }}>
              {score} из {questions.length}
            </h3>
            
            <p style={{ marginBottom: '30px', color: '#666' }}>
              {score === questions.length ? 'Идеально! Ты настоящий знаток рока!' :
               score >= questions.length/2 ? 'Неплохо! Есть куда расти!' :
               'Попробуй ещё раз, подтяни знания!'}
            </p>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={handleRestart}
                style={{
                  background: '#c41e3a',
                  color: 'white',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 5px 0 #8b0000',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#a01830';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#c41e3a';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                🔄 ИГРАТЬ СНОВА
              </button>
              
              <button
                onClick={onClose}
                style={{
                  background: '#f0f0f0',
                  color: '#666',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 5px 0 #ddd',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#e0e0e0';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#f0f0f0';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                ✕ ЗАКРЫТЬ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDialog;