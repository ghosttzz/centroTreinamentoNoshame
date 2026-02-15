"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type Language = 'pt' | 'en' | 'es';

const translations = {
  pt: {
    history: {
      title: "Nossa História",
      text: "A NoShameBJJ nasce do Jiu-Jitsu tradicional, com base familiar, ética e respeito à essência da arte suave. Aqui, o treino vai além da luta: é um caminho de autoconhecimento, disciplina e liberdade. Acreditamos que cada pessoa tem seu próprio tempo, sua história e sua forma de evoluir. Por isso, criamos um ambiente seguro, humano e responsável, onde crianças, mulheres, homens e famílias podem treinar sem máscaras, sem ego e sem vergonha de ser quem são. Nosso Jiu-Jitsu é passado de geração em geração, valorizando a constância, a humildade e a verdade, dentro e fora do tatame."
    },
    nav: {
      inicio: "Início",
      sobre: "Sobre",
      horarios: "Horários",
      galeria: "Galeria",
      avaliacoes: "Avaliações",
      contato: "Contato"
    },
    hero: {
      title: "No Shame Jiu Jitsu",
      subtitle: "A gente te espera no tatame. Só vem!",
      btnVerHorarios: "Ver Horários",
      btnQueroTreinar: "Quero Treinar"
    },
    benefits: {
      title: "Comece Hoje Mesmo",
      subtitle: "Sem compromisso, sem barreiras",
      planTitle: "Plano Completo",
      planDesc: "Treine no horário que quiser. Treine quantas vezes quiser. Sem limite de aulas, todos os dias. O plano perfeito para quem leva o Jiu- Jitsu a sério e busca o melhor custo- benefício para evoluir de verdade.",
      trialTitle: "Aula Experimental Gratuita",
      trialDesc: "Venha conhecer nosso espaço e experimentar uma aula completa sem nenhum custo. Sinta na prática como é treinar no No Shame Jiu Jitsu!",
      kimonoTitle: "Kimono Sem Pressa",
      kimonoDesc: "Você só precisa adquirir seu kimono após 1 mês de matrícula. Comece treinando com roupas confortáveis enquanto se adapta!",
      btnAgendar: "Agendar Aula Experimental Gratuita",
      ambTitle: "Ambiente Profissional e Acolhedor",
      ambDesc: "O maior centro de treinamento da Lagoa, com 80m² de tatame de lona. Um ambiente acolhedor para os alunos, com Wi-Fi liberado, café, petiscos, sofá e mesas de trabalho, tudo pensado para oferecer o máximo conforto ao praticante e aos seus acompanhantes."
    },
    about: {
      professorName: "Professor David Pavesi",
      bio: [
        "David Pavesi é empresário, natural de Santa Catarina, casado há 25 anos e pai de dois filhos. Praticante de Jiu-Jitsu há 15 anos, construiu sua trajetória pautada em princípios sólidos como respeito, disciplina e bons costumes, valores que orientam tanto sua vida pessoal quanto sua atuação no tatame.",
        "Com postura ética e liderança responsável, dedica-se ao desenvolvimento técnico e humano de seus alunos. Enxerga o Jiu-Jitsu como uma ferramenta de transformação, capaz de fortalecer caráter, autocontrole, confiança e responsabilidade, indo muito além da prática esportiva.",
        "Seu trabalho segue uma metodologia consciente e acessível, respeitando o tempo, o perfil e os objetivos individuais de cada aluno, tanto no Jiu-Jitsu adulto quanto no infantil. No tatame, prioriza um ambiente seguro, acolhedor e disciplinado, onde a evolução acontece com constância e sem vaidade.",
        "Como pai e educador, acredita no Jiu-Jitsu como base sólida para a formação de crianças e adultos, contribuindo para o desenvolvimento físico, emocional e social. Sua didática clara e paciente cria um ambiente de pertencimento, motivação e confiança.",
        "Mais do que formar atletas, David Pavesi tem como missão formar pessoas, preservando a tradição e a essência da arte suave, com valores que se refletem dentro e fora do tatame."
      ]
    },
    mission: {
      title: "Sobre a No Shame Jiu Jitsu",
      slides: [
        {
          key: "missao",
          title: "Missão",
          text: "Ensinar Jiu-Jitsu como uma ferramenta de desenvolvimento físico, emocional e humano, respeitando o tempo, os limites e a individualidade de cada aluno."
        },
        {
          key: "valores",
          title: "Valores",
          text: `Sem Vergonha — liberdade para ser quem você é e evoluir no seu ritmo\n\nLiberdade — O direito de ser quem você é no tatame e fora dele, treinando sem medo, sem ego e sem máscaras.\n\nRespeito — ao corpo, à mente e à história de cada um\n\nFamília — o Jiu-Jitsu como elo entre gerações\n\nDisciplina com Consciência — constância, propósito e responsabilidade\n\nHumildade — aprender e ensinar sem ego\n\nSegurança — pessoas sempre em primeiro lugar\n\nVerdade — um ambiente ético, real e transparente`
        },
        {
          key: "visao",
          title: "Visão",
          text: "Ser referência não apenas pela técnica, mas pelo impacto positivo na vida das pessoas, preservando a essência do Jiu-Jitsu e formando pessoas para hoje e para o futuro."
        }
      ],
      phrase: "Queremos que você viva do seu próprio jeito!"
    },
    schedule: {
      title: "Horários das Aulas",
      subtitle: "Clique em cada dia para expandir ou recolher",
      monday: "Segunda-feira",
      tuesday: "Terça-feira",
      wednesday: "Quarta-feira",
      thursday: "Quinta-feira",
      friday: "Sexta-feira",
      aula: "aula",
      aulas: "aulas"
    },
    gallery: {
      title: "Galeria",
      previous: "Anterior",
      next: "Próximo"
    },
    reviews: {
      title: "O que dizem nossos alunos",
      linkGoogle: "Ver no Google →"
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Fale Conosco",
      mapTitle: "Mapa",
      footer: "Centro Treinamento No Shame Jiu-Jitsu. Todos os direitos reservados."
    }
  },
  en: {
    history: {
      title: "Our History",
      text: "NoShameBJJ was born from traditional Jiu-Jitsu, with a family foundation, ethics, and respect for the essence of the gentle art. Here, training goes beyond fighting: it is a path of self-knowledge, discipline, and freedom. We believe that each person has their own time, story, and way to evolve. That's why we created a safe, human, and responsible environment where children, women, men, and families can train without masks, without ego, and without shame of being who they are. Our Jiu-Jitsu is passed down from generation to generation, valuing consistency, humility, and truth, on and off the mat."
    },
    nav: {
      inicio: "Home",
      sobre: "About",
      horarios: "Schedule",
      galeria: "Gallery",
      avaliacoes: "Reviews",
      contato: "Contact"
    },
    hero: {
      title: "No Shame Jiu Jitsu",
      subtitle: "We're waiting for you on the mat. Just come!",
      btnVerHorarios: "View Schedule",
      btnQueroTreinar: "I Want to Train"
    },
    benefits: {
      title: "Start Today",
      subtitle: "No commitment, no barriers",
      trialTitle: "Free Trial Class",
      trialDesc: "Come visit our space and experience a complete class at no cost. Feel in practice what it's like to train at No Shame Jiu Jitsu!",
      kimonoTitle: "No Rush for Kimono",
      kimonoDesc: "You only need to purchase your kimono after 1 month of enrollment. Start training in comfortable clothes while you adapt!",
      btnAgendar: "Schedule Free Trial Class",
      planTitle: "Full Plan",
      planDesc: "Train at any time you want. Train as often as you want. Unlimited classes, every day. The perfect plan for those who take Jiu-Jitsu seriously and are looking for the best value to truly evolve.",
      ambTitle: "Professional and Welcoming Environment",
      ambDesc: "The largest training center in Lagoa, featuring 80m² of canvas mat space. A welcoming environment for students, with free Wi-Fi, coffee, snacks, sofas, and work tables — all designed to provide maximum comfort for practitioners and their companions."

    },
    about: {
      professorName: "Professor David Pavesi",
      bio: [
        "Professor David Pavesi is an entrepreneur, married for 25 years, father of two, and a native of Santa Catarina. A Jiu-Jitsu teacher who has been practicing the gentle art for 15 years, he is recognized for firmly upholding principles, good manners, respect, and discipline—values that guide both his personal life and his work on the mat.",
        "With an ethical stance and responsible leadership, David is a dedicated teacher, committed to the technical and human evolution of his students. He believes that Jiu-Jitsu goes far beyond fighting: it is a powerful tool for transformation, capable of developing character, self-control, confidence, and responsibility.",
        "His work is based on a conscious and accessible methodology, respecting the time, profile, and individual goals of each student—whether in adult or children's Jiu-Jitsu. On the mat, he prioritizes a safe, welcoming, and disciplined environment where everyone can evolve consistently and without vanity.",
        "As a father and educator, he believes in Jiu-Jitsu as a solid foundation for the development of children and adults, contributing not only to physical development but also to emotional and social growth. His clear and patient teaching style makes students feel motivated, confident, and part of a true family.",
        "More than just forming practitioners, Professor David Pavesi's mission is to form people, strengthening values that are reflected both on and off the mat, always with respect for family, tradition, and the essence of the gentle art."
      ]
    },
    mission: {
      title: "About No Shame Jiu Jitsu",
      slides: [
        {
          key: "missao",
          title: "Mission",
          text: "To teach Jiu-Jitsu as a tool for physical, emotional, and human development, respecting the time, limits, and individuality of each student."
        },
        {
          key: "valores",
          title: "Values",
          text: `No Shame — freedom to be who you are and evolve at your own pace\n\nFreedom — The right to be who you are on and off the mat, training without fear, ego, or masks.\n\nRespect — for the body, mind, and story of each person\n\nFamily — Jiu-Jitsu as a bond between generations\n\nDiscipline with Awareness — consistency, purpose, and responsibility\n\nHumility — learning and teaching without ego\n\nSafety — people always come first\n\nTruth — an ethical, real, and transparent environment`
        },
        {
          key: "visao",
          title: "Vision",
          text: "To be a reference in Jiu-Jitsu teaching, promoting the gentle art as a tool for personal, social, and well-being transformation, always preserving the essence, tradition, and family spirit."
        }
      ],
      phrase: "We want you to live your own way!"
    },
    schedule: {
      title: "Class Schedule",
      subtitle: "Click each day to expand or collapse",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      aula: "class",
      aulas: "classes"
    },
    gallery: {
      title: "Gallery",
      previous: "Previous",
      next: "Next"
    },
    reviews: {
      title: "What our students say",
      linkGoogle: "See on Google →"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in Touch",
      mapTitle: "Map",
      footer: "No Shame Jiu-Jitsu Training Center. All rights reserved."
    }
  },
  es: {
    history: {
      title: "Nuestra Historia",
      text: "NoShameBJJ nace del Jiu-Jitsu tradicional, con base familiar, ética y respeto a la esencia del arte suave. Aquí, el entrenamiento va más allá de la lucha: es un camino de autoconocimiento, disciplina y libertad. Creemos que cada persona tiene su propio tiempo, su historia y su forma de evolucionar. Por eso, creamos un ambiente seguro, humano y responsable, donde niños, mujeres, hombres y familias pueden entrenar sin máscaras, sin ego y sin vergüenza de ser quienes son. Nuestro Jiu-Jitsu se transmite de generación en generación, valorando la constancia, la humildad y la verdad, dentro y fuera del tatami."
    },
    nav: {
      inicio: "Inicio",
      sobre: "Acerca de",
      horarios: "Horarios",
      galeria: "Galería",
      avaliacoes: "Reseñas",
      contato: "Contacto"
    },
    hero: {
      title: "No Shame Jiu Jitsu",
      subtitle: "Te esperamos en el tatami. ¡Solo ven!",
      btnVerHorarios: "Ver Horarios",
      btnQueroTreinar: "Quiero Entrenar"
    },
    benefits: {
      title: "Empieza Hoy Mismo",
      subtitle: "Sin compromiso, sin barreras",
      trialTitle: "Clase de Prueba Gratuita",
      trialDesc: "Ven a conocer nuestro espacio y experimenta una clase completa sin ningún costo. ¡Siente en la práctica cómo es entrenar en No Shame Jiu Jitsu!",
      kimonoTitle: "Kimono Sin Prisa",
      kimonoDesc: "Solo necesitas adquirir tu kimono después de 1 mes de matrícula. ¡Comienza entrenando con ropa cómoda mientras te adaptas!",
      btnAgendar: "Agendar Clase de Prueba Gratuita",
      planTitle: "Plan Completo",
      planDesc: "Entrena a la hora que quieras. Entrena todas las veces que quieras. Clases ilimitadas, todos los días. El plan perfecto para quienes se toman el Jiu-Jitsu en serio y buscan la mejor relación costo-beneficio para evolucionar de verdad.",
      ambTitle: "Ambiente Profesional y Acogedor",
      ambDesc: "El mayor centro de entrenamiento de Lagoa, con 80m² de tatami de lona. Un ambiente acogedor para los alumnos, con Wi-Fi gratuito, café, aperitivos, sofás y mesas de trabajo — todo pensado para ofrecer el máximo confort al practicante y a sus acompañantes."

    },
    about: {
      professorName: "Profesor David Pavesi",
      bio: [
        "El Profesor David Pavesi es empresario, casado desde hace 25 años, padre de dos hijos y natural de Santa Catarina. Profesor de Jiu-Jitsu que practica el arte suave desde hace 15 años, es reconocido por velar firmemente por los principios, las buenas costumbres, el respeto y la disciplina, valores que guían tanto su vida personal como su actuación en el tatami.",
        "Con una postura ética y un liderazgo responsable, David es un profesor dedicado, comprometido con la evolución técnica y humana de sus alumnos. Cree que el Jiu-Jitsu va mucho más allá de la lucha: es una poderosa herramienta de transformación, capaz de desarrollar carácter, autocontrol, confianza y responsabilidad.",
        "Su trabajo se basa en una metodología consciente y accesible, respetando el tiempo, el perfil y los objetivos individuales de cada alumno, ya sea en el Jiu-Jitsu adulto o infantil. En el tatami, prioriza un ambiente seguro, acogedor y disciplinado, donde todos puedan evolucionar con constancia y sin vanidad.",
        "Como padre y educador, cree en el Jiu-Jitsu como base sólida para la formación de niños y adultos, contribuyendo no solo al desarrollo físico, sino también al emocional y social. Su didáctica clara y paciente hace que los alumnos se sientan motivados, confiados y parte de una verdadera familia.",
        "Más que formar practicantes, el Profesor David Pavesi tiene como misión formar personas, fortaleciendo valores que se reflejan dentro y fuera del tatami, siempre con respeto a la familia, la tradición y la esencia del arte suave."
      ]
    },
    mission: {
      title: "Acerca de No Shame Jiu Jitsu",
      slides: [
        {
          key: "missao",
          title: "Misión",
          text: "Enseñar Jiu-Jitsu como una herramienta de desarrollo físico, emocional y humano, respetando el tiempo, los límites y la individualidad de cada alumno."
        },
        {
          key: "valores",
          title: "Valores",
          text: `Sin Vergüenza — libertad para ser quien eres y evolucionar a tu ritmo\n\nLibertad — El derecho de ser quien eres dentro y fuera del tatami, entrenando sin miedo, sin ego y sin máscaras.\n\nRespeto — al cuerpo, a la mente y a la historia de cada uno\n\nFamilia — el Jiu-Jitsu como vínculo entre generaciones\n\nDisciplina con Conciencia — constancia, propósito y responsabilidad\n\nHumildad — aprender y enseñar sin ego\n\nSeguridad — las personas siempre primero\n\nVerdad — un ambiente ético, real y transparente`
        },
        {
          key: "visao",
          title: "Visión",
          text: "Ser referencia en la enseñanza del Jiu-Jitsu, promoviendo el arte suave como herramienta de transformación personal, social y de bienestar, siempre preservando la esencia, la tradición y el espíritu de familia."
        }
      ],
      phrase: "¡Queremos que vivas a tu manera!"
    },
    schedule: {
      title: "Horarios de Clases",
      subtitle: "Haz clic en cada día para expandir o contraer",
      monday: "Lunes",
      tuesday: "Martes",
      wednesday: "Miércoles",
      thursday: "Jueves",
      friday: "Viernes",
      aula: "clase",
      aulas: "clases"
    },
    gallery: {
      title: "Galería",
      previous: "Anterior",
      next: "Siguiente"
    },
    reviews: {
      title: "Lo que dicen nuestros alumnos",
      linkGoogle: "Ver en Google →"
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Habla con Nosotros",
      mapTitle: "Mapa",
      footer: "Centro de Entrenamiento No Shame Jiu-Jitsu. Todos los derechos reservados."
    }
  }
};

const horariosData = {
  pt: [
    {
      dia: "Segunda-feira",
      itens: [
        "07:00 - 08:00 | Jiu Jitsu Adulto",
        "17:00 - 18:00 | Jiu Jitsu Adulto",
        "18:40 - 19:40 | Jiu Jitsu Infantil",
        "20:00 - 21:30 | Jiu Jitsu Adulto"
      ]
    },
    {
      dia: "Terça-feira",
      itens: [
        "07:00 - 08:00 | Jiu Jitsu Adulto",
        "08:15 - 09:15 | Jiu Jitsu Infantil",
        "16:00 - 17:00 | Jiu Jitsu Infantil (4 a 7 anos)",
        "18:40 - 19:40 | Jiu Jitsu Infantil (4 a 7 anos)",
        "18:40 - 19:40 | Jiu Jitsu Juvenil (8 aos 14 anos)",
        "20:00 - 21:00 | Jiu Jitsu Adulto",
        "21:00 - 22:00 | Jiu Jitsu Nogi"
      ]
    },
    {
      dia: "Quarta-feira",
      itens: [
        "07:00 - 08:00 | Jiu Jitsu Adulto",
        "08:00 - 09:00 | Jiu Jitsu Infantil (5 aos 11 anos)",
        "17:00 - 18:00 | Jiu Jitsu Adulto",
        "18:40 - 19:40 | Jiu Jitsu Infantil (4 a 7 anos)",
        "20:00 - 21:30 | Jiu Jitsu Adulto"
      ]
    },
    {
      dia: "Quinta-feira",
      itens: [
        "07:00 - 08:00 | Jiu Jitsu Adulto",
        "08:15 - 09:15 | Jiu Jitsu Infantil",
        "16:00 - 17:00 | Jiu Jitsu Infantil (4 a 7 anos)",
        "18:40 - 19:40 | Jiu Jitsu Infantil (4 a 7 anos)",
        "18:40 - 19:40 | Jiu Jitsu Juvenil (8 aos 14 anos)",
        "20:00 - 21:00 | Jiu Jitsu Adulto (Victor)",
        "21:00 - 22:00 | Jiu Jitsu para Competição"
      ]
    },
    {
      dia: "Sexta-feira",
      itens: [
        "18:40 - 19:40 | Jiu Jitsu Infantil (Misto)",
        "20:00 - 21:30 | Jiu Jitsu Adulto Lutas"
      ]
    }
  ],
  en: [
    {
      dia: "Monday",
      itens: [
        "07:00 - 08:00 | Adult Jiu Jitsu",
        "17:00 - 18:00 | Adult Jiu Jitsu",
        "18:40 - 19:40 | Kids Jiu Jitsu",
        "20:00 - 21:30 | Adult Jiu Jitsu"
      ]
    },
    {
      dia: "Tuesday",
      itens: [
        "07:00 - 08:00 | Adult Jiu Jitsu",
        "08:15 - 09:15 | Kids Jiu Jitsu",
        "16:00 - 17:00 | Kids Jiu Jitsu (4 to 7 years)",
        "18:40 - 19:40 | Kids Jiu Jitsu (4 to 7 years)",
        "18:40 - 19:40 | Youth Jiu Jitsu (8 to 14 years)",
        "20:00 - 21:00 | Adult Jiu Jitsu",
        "21:00 - 22:00 | Nogi Jiu Jitsu"
      ]
    },
    {
      dia: "Wednesday",
      itens: [
        "07:00 - 08:00 | Adult Jiu Jitsu",
        "08:00 - 09:00 | Kids Jiu Jitsu (5 to 11 years)",
        "17:00 - 18:00 | Adult Jiu Jitsu",
        "18:40 - 19:40 | Kids Jiu Jitsu (4 to 7 years)",
        "20:00 - 21:30 | Adult Jiu Jitsu"
      ]
    },
    {
      dia: "Thursday",
      itens: [
        "07:00 - 08:00 | Adult Jiu Jitsu",
        "08:15 - 09:15 | Kids Jiu Jitsu",
        "16:00 - 17:00 | Kids Jiu Jitsu (4 to 7 years)",
        "18:40 - 19:40 | Kids Jiu Jitsu (4 to 7 years)",
        "18:40 - 19:40 | Youth Jiu Jitsu (8 to 14 years)",
        "20:00 - 21:00 | Adult Jiu Jitsu (Victor)",
        "21:00 - 22:00 | Competition Jiu Jitsu"
      ]
    },
    {
      dia: "Friday",
      itens: [
        "18:40 - 19:40 | Kids Jiu Jitsu (Mixed)",
        "20:00 - 21:30 | Adult Jiu Jitsu Sparring"
      ]
    }
  ],
  es: [
    {
      dia: "Lunes",
      itens: [
        "07:00 - 08:00 | Jiu Jitsu Adulto",
        "17:00 - 18:00 | Jiu Jitsu Adulto",
        "18:40 - 19:40 | Jiu Jitsu Infantil",
        "20:00 - 21:30 | Jiu Jitsu Adulto"
      ]
    },
    {
      dia: "Martes",
      itens: [
        "07:00 - 08:00 | Jiu Jitsu Adulto",
        "08:15 - 09:15 | Jiu Jitsu Infantil",
        "16:00 - 17:00 | Jiu Jitsu Infantil (4 a 7 años)",
        "18:40 - 19:40 | Jiu Jitsu Infantil (4 a 7 años)",
        "18:40 - 19:40 | Jiu Jitsu Juvenil (8 a 14 años)",
        "20:00 - 21:00 | Jiu Jitsu Adulto",
        "21:00 - 22:00 | Jiu Jitsu Nogi"
      ]
    },
    {
      dia: "Miércoles",
      itens: [
        "07:00 - 08:00 | Jiu Jitsu Adulto",
        "08:00 - 09:00 | Jiu Jitsu Infantil (5 a 11 años)",
        "17:00 - 18:00 | Jiu Jitsu Adulto",
        "18:40 - 19:40 | Jiu Jitsu Infantil (4 a 7 años)",
        "20:00 - 21:30 | Jiu Jitsu Adulto"
      ]
    },
    {
      dia: "Jueves",
      itens: [
        "07:00 - 08:00 | Jiu Jitsu Adulto",
        "08:15 - 09:15 | Jiu Jitsu Infantil",
        "16:00 - 17:00 | Jiu Jitsu Infantil (4 a 7 años)",
        "18:40 - 19:40 | Jiu Jitsu Infantil (4 a 7 años)",
        "18:40 - 19:40 | Jiu Jitsu Juvenil (8 a 14 años)",
        "20:00 - 21:00 | Jiu Jitsu Adulto (Victor)",
        "21:00 - 22:00 | Jiu Jitsu para Competición"
      ]
    },
    {
      dia: "Viernes",
      itens: [
        "18:40 - 19:40 | Jiu Jitsu Infantil (Mixto)",
        "20:00 - 21:30 | Jiu Jitsu Adulto Combate"
      ]
    }
  ]
};

const avaliacoes = [
    {
      nome: "Milena Rodrigues",
      avaliacao: 5,
      comentario: {
        pt: "Que espaço incrível! Ambiente acolhedor e muito bem organizado. Os professores demonstram profissionalismo e carinho com as crianças, estimulando disciplina, respeito e superação. Meu filho adora treinar aqui , é visível o quanto ele evolui a cada aula. Parabéns a toda a equipe pelo excelente trabalho!",
        en: "What an amazing place! Welcoming and very well organized environment. The teachers show professionalism and care with the children, encouraging discipline, respect, and overcoming challenges. My son loves training here, and it's clear how much he evolves with each class. Congratulations to the whole team for the excellent work!",
        es: "¡Qué espacio increíble! Ambiente acogedor y muy bien organizado. Los profesores demuestran profesionalismo y cariño con los niños, estimulando disciplina, respeto y superación. A mi hijo le encanta entrenar aquí, es visible cuánto evoluciona en cada clase. ¡Felicitaciones a todo el equipo por el excelente trabajo!"
      },
      data: { pt: "há 13 semanas", en: "13 weeks ago", es: "hace 13 semanas" }
    },
    {
      nome: "Juliana Freitas de Andrade",
      avaliacao: 5,
      comentario: {
        pt: "Meu filho de 5 anos faz jiu-jitsu com o Prof. David há  quase 2 anos e o aprendizado do esporte tem sido muito importante para o desenvolvimento físico e emocional dele. As crianças conseguem aprender sobre conceitos de hierarquia, de disciplina, além da defesa pessoal. Nota 10!",
        en: "My 5-year-old son has been doing jiu-jitsu with Prof. David for almost 2 years and learning the sport has been very important for his physical and emotional development. The children learn about hierarchy, discipline, and self-defense. Grade 10!",
        es: "Mi hijo de 5 años hace jiu-jitsu con el Prof. David desde hace casi 2 años y el aprendizaje del deporte ha sido muy importante para su desarrollo físico y emocional. Los niños aprenden sobre conceptos de jerarquía, disciplina y defensa personal. ¡Nota 10!"
      },
      data: { pt: "há 13 semanas", en: "13 weeks ago", es: "hace 13 semanas" }
    },
    {
      nome: "Gabriel Figueiro",
      avaliacao: 5,
      comentario: {
        pt: "Treinamos por uma semana e meia na NoShame Jiu Jitsu em Florianópolis, perto da Lagoa, e foi uma experiência incrível. Os instrutores foram extremamente acolhedores e dedicaram tempo para nos ajudar individualmente a aprimorar nossas habilidades no Jiu-Jitsu. O ambiente é profissional, mas muito amigável; você se sente imediatamente parte da equipe. Recomendamos fortemente para quem visita Florianópolis e quer treinar Jiu-Jitsu enquanto aproveita a beleza da ilha. Obrigado por tornar nossa estadia tão especial, com certeza voltaremos!",
        en: "We trained for a week and a half at NoShame Jiu Jitsu in Florianópolis, near Lagoa, and it was an incredible experience. The instructors were extremely welcoming and took time to help us individually improve our Jiu-Jitsu skills. The environment is professional but very friendly; you immediately feel part of the team. We highly recommend it to anyone visiting Florianópolis who wants to train Jiu-Jitsu while enjoying the beauty of the island. Thank you for making our stay so special, we will definitely be back!",
        es: "Entrenamos durante una semana y media en NoShame Jiu Jitsu en Florianópolis, cerca de la Lagoa, y fue una experiencia increíble. Los instructores fueron extremadamente acogedores y se tomaron el tiempo para ayudarnos individualmente a mejorar nuestras habilidades en Jiu-Jitsu. El ambiente es profesional, pero muy amigable; te sientes inmediatamente parte del equipo. Lo recomendamos mucho para quien visite Florianópolis y quiera entrenar Jiu-Jitsu mientras disfruta de la belleza de la isla. ¡Gracias por hacer que nuestra estadía fuera tan especial, sin duda volveremos!"
      },
      data: { pt: "há 13 semanas", en: "13 weeks ago", es: "hace 13 semanas" }
    },
  {
    nome: "Carlo Manoel Souza (KCO)",
    avaliacao: 5,
    comentario: {
      pt: "Excelente projeto de treinamento para jiu jitsu, ambiente agradável, espaçoso, um dos poucos CT's com tatame de raspa de pneu. Recomendo muito.",
      en: "Excellent jiu-jitsu training project, pleasant and spacious environment, one of the few training centers with a recycled tire mat. Highly recommend.",
      es: "Excelente proyecto de entrenamiento de jiu-jitsu, ambiente agradable y espacioso, uno de los pocos centros con tatami de caucho reciclado. Lo recomiendo mucho."
    },
    data: { pt: "há 15 semanas", en: "15 weeks ago", es: "hace 15 semanas" }
  },
  {
    nome: "Jane Carla Da Cruz",
    avaliacao: 5,
    comentario: {
      pt: "Meu filho Arthur está amando!! Tudo é muito lúdico!! E quem tem filho sabe como é importante essa questão. O centro está de parabéns!!!!!",
      en: "My son Arthur is loving it!! Everything is very playful!! And those who have children know how important this is. The center is to be congratulated!!!!!",
      es: "¡Mi hijo Arthur lo está amando! ¡Todo es muy lúdico! Y quien tiene hijos sabe lo importante que es esto. ¡¡¡Felicitaciones al centro!!!"
    },
    data: { pt: "há 15 semanas", en: "15 weeks ago", es: "hace 15 semanas" }
  },
  {
    nome: "Tatiana Rosa Dias Oliari",
    avaliacao: 5,
    comentario: {
      pt: "Melhor centro de treinamento!! Equipe maravilhosa!! Local ótimo!! Sem falar do professor David Pavesi, excelente profissional, meus filhos amam fazer as aulas!! Parabéns!!",
      en: "Best training center!! Wonderful team!! Great place!! Not to mention Professor David Pavesi, excellent professional, my children love taking classes!! Congratulations!!",
      es: "¡El mejor centro de entrenamiento! ¡Equipo maravilloso! ¡Lugar excelente! Sin mencionar al profesor David Pavesi, excelente profesional, ¡a mis hijos les encantan las clases! ¡Felicitaciones!"
    },
    data: { pt: "há 15 semanas", en: "15 weeks ago", es: "hace 15 semanas" }
  },
  {
    nome: "Anna Luiza Lemos de Queiroz",
    avaliacao: 5,
    comentario: {
      pt: "Professor super dedicado, aulas muito boas. Minha filha Ama as aulas ☺️",
      en: "Super dedicated teacher, very good classes. My daughter loves the classes ☺️",
      es: "Profesor súper dedicado, clases muy buenas. Mi hija ama las clases ☺️"
    },
    data: { pt: "há 15 semanas", en: "15 weeks ago", es: "hace 15 semanas" }
  },
  {
    nome: "Guilherme",
    avaliacao: 5,
    comentario: {
      pt: "Ótimo ambiente! Professor muito competente, turma acolhedora e treinos intensos que fazem toda a diferença. Evoluí muito desde que comecei e recomendo a todos que queiram aprender jiu-jitsu com qualidade.",
      en: "Great environment! Very competent teacher, welcoming group and intense training that makes all the difference. I have evolved a lot since I started and recommend it to everyone who wants to learn quality jiu-jitsu.",
      es: "¡Óptimo ambiente! Profesor muy competente, grupo acogedor y entrenamientos intensos que marcan la diferencia. He evolucionado mucho desde que empecé y lo recomiendo a todos los que quieran aprender jiu-jitsu de calidad."
    },
    data: { pt: "há 25 semanas", en: "25 weeks ago", es: "hace 25 semanas" }
  },
  {
    nome: "Alex Simoes",
    avaliacao: 5,
    comentario: {
      pt: "Treino há 2 anos quase e é um ótimo lugar bem ampliado, super recomendo para quem quer começar no jiu-jitsu ou para quem já treinou e para quem quer treinar.",
      en: "I've been training for almost 2 years and it's a great, spacious place. I highly recommend it for those who want to start jiu-jitsu or for those who have already trained and want to train again.",
      es: "Entreno hace casi 2 años y es un lugar muy amplio, lo recomiendo mucho para quien quiera empezar en el jiu-jitsu o para quien ya entrenó y quiera volver a entrenar."
    },
    data: { pt: "há 34 semanas", en: "34 weeks ago", es: "hace 34 semanas" }
  },
];

const galeria = ["/galeria/1.png", "/galeria/2.jpeg", "/galeria/3.jpeg", "/galeria/4.jpeg", "/galeria/5.jpeg", "/galeria/6.jpeg", "/galeria/7.jpeg", "/galeria/8.jpg", "/galeria/9.png"];

// Carrossel para avaliações
function ReviewCarousel({ reviews, language }: { reviews: typeof avaliacoes, language: Language }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));
  return (
    <div className="mt-8">
      <div className="relative max-w-2xl mx-auto">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 border border-[#5d5d5d] rounded-full p-3 hover:bg-[#5d5d5d]/50 transition-all hover:scale-110"
          aria-label="Anterior"
          style={{ left: -56 }}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 p-8 min-h-[220px] flex flex-col items-center justify-center overflow-hidden relative animate-fade-in">
          <div key={current}>
            <h3 className="text-lg font-bold mb-1 text-center">{reviews[current].nome}</h3>
            <div className="flex gap-1 justify-center mb-2">
              {[...Array(reviews[current].avaliacao)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-[#c0c0c0] block text-center mb-2">{reviews[current].data[language]}</span>
            <p className="mt-2 text-[#c0c0c0] leading-relaxed italic text-center">"{reviews[current].comentario[language]}"</p>
          </div>
        </div>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 border border-[#5d5d5d] rounded-full p-3 hover:bg-[#5d5d5d]/50 transition-all hover:scale-110"
          aria-label="Próximo"
          style={{ right: -56 }}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="flex justify-center gap-2 mt-4">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${current === idx ? 'w-8 bg-white' : 'w-2 bg-[#5d5d5d] hover:bg-[#c0c0c0]'}`}
              aria-label={`Ir para avaliação ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Hook para animação de scroll reveal
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

// Carrossel lateral para missão, valores e visão
function MissionCarousel({ slides, phrase }: { slides: { key: string; title: string; text: string }[], phrase?: string }) {
  const [current, setCurrent] = useState(0);
  
  const prev = () => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  };
  
  const next = () => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  };
  
  return (
    <div className="mt-8">
      <div className="relative max-w-2xl mx-auto">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 border border-[#5d5d5d] rounded-full p-3 hover:bg-[#5d5d5d]/50 transition-all hover:scale-110"
          aria-label="Anterior"
          style={{ left: -56 }}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 p-8 text-center min-h-[280px] flex flex-col items-center justify-center overflow-hidden relative">
          <div 
            key={current}
            className="animate-fade-in"
          >
            <h3 className="text-xl font-bold mb-4">{slides[current].title}</h3>
            {slides[current].key === 'valores' ? (
              <div className="grid gap-4 md:grid-cols-2">
                {slides[current].text.split(/\n+/).map((item, idx) => {
                  const match = item.match(/^(.*?)[—-](.*)$/);
                  return (
                    <div key={idx} className="rounded-2xl bg-[#232323] border border-[#5d5d5d]/40 p-4 text-left">
                      {match ? (
                        <>
                          <div className="font-bold text-white mb-1">{match[1].trim()}</div>
                          <div className="text-[#c0c0c0] text-sm">{match[2].trim()}</div>
                        </>
                      ) : (
                        <div className="text-[#c0c0c0]">{item}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-[#c0c0c0] leading-relaxed whitespace-pre-line">{slides[current].text}</p>
            )}
          </div>
        </div>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 border border-[#5d5d5d] rounded-full p-3 hover:bg-[#5d5d5d]/50 transition-all hover:scale-110"
          aria-label="Próximo"
          style={{ right: -56 }}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${current === idx ? 'w-8 bg-white' : 'w-2 bg-[#5d5d5d] hover:bg-[#c0c0c0]'}`}
              aria-label={`Ir para ${slides[idx].title}`}
            />
          ))}
        </div>
      </div>
      {phrase && (
        <div className="text-center mt-8">
          <p className="text-2xl font-semibold italic text-white/90">{phrase}</p>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  const [expandedDays, setExpandedDays] = useState<string[]>([]);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [language, setLanguage] = useState<Language>('pt');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  // Scroll reveal refs
  const benefitsReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const missionReveal = useScrollReveal();
  const scheduleReveal = useScrollReveal();
  const galleryReveal = useScrollReveal();
  const reviewsReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  const t = translations[language];

  const handleLanguageChange = (newLang: Language) => {
    if (newLang === language) return;
    setIsChangingLanguage(true);
    setTimeout(() => {
      setLanguage(newLang);
      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 50);
    }, 200);
  };

  const toggleDay = (dia: string) => {
    setExpandedDays(prev =>
      prev.includes(dia)
        ? prev.filter(d => d !== dia)
        : [...prev, dia]
    );
  };

  const nextGallery = () => {
    setCurrentGalleryIndex((prev) =>
      prev + 3 >= galeria.length ? 0 : prev + 3
    );
  };

  const prevGallery = () => {
    setCurrentGalleryIndex((prev) =>
      prev - 3 < 0 ? Math.max(0, galeria.length - 3) : prev - 3
    );
  };

  const nextReview = () => {
    setCurrentReviewIndex((prev) =>
      prev + 3 >= avaliacoes.length ? 0 : prev + 3
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) =>
      prev - 3 < 0 ? Math.max(0, avaliacoes.length - 3) : prev - 3
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Overlay de transição de idioma */}
      <div className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-200 bg-black/30 backdrop-blur-sm ${isChangingLanguage ? 'opacity-100' : 'opacity-0'
        }`} />

      {/* Topbar */}
      <header className="sticky top-0 z-50 border-b border-[#5d5d5d]/30 bg-black/95 backdrop-blur-md shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Menu Hamburguer - Esquerda */}
            <div className="relative flex items-center gap-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity group ${menuOpen ? 'elementor-active' : ''}`}
                tabIndex={0}
                aria-label="Alternar menu"
                aria-expanded={menuOpen}
              >
                <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-7'}`} />
                <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'group-hover:w-5'}`} />
                <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-7'}`} />
              </button>

              {/* Menu Expansível - Dropdown */}
              <div
                className={`fixed left-4 top-20 sm:top-24 w-72 overflow-hidden transition-all duration-300 ease-out origin-top-left z-50 ${menuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
              >
                <nav
                  className="rounded-2xl border border-[#5d5d5d]/40 bg-black/98 backdrop-blur-xl shadow-2xl"
                  aria-hidden={!menuOpen}
                >
                  <div className="px-3 py-3 flex flex-col gap-1">
                    <a
                      className="text-[#c0c0c0] hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-[#5d5d5d]/40 font-medium tracking-wide"
                      href="#inicio"
                      onClick={() => setMenuOpen(false)}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      {t.nav.inicio}
                    </a>
                    <a
                      className="text-[#c0c0c0] hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-[#5d5d5d]/40 font-medium tracking-wide"
                      href="#sobre"
                      onClick={() => setMenuOpen(false)}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      {t.nav.sobre}
                    </a>
                    <a
                      className="text-[#c0c0c0] hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-[#5d5d5d]/40 font-medium tracking-wide"
                      href="#horarios"
                      onClick={() => setMenuOpen(false)}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      {t.nav.horarios}
                    </a>
                    <a
                      className="text-[#c0c0c0] hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-[#5d5d5d]/40 font-medium tracking-wide"
                      href="#galeria"
                      onClick={() => setMenuOpen(false)}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      {t.nav.galeria}
                    </a>
                    <a
                      className="text-[#c0c0c0] hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-[#5d5d5d]/40 font-medium tracking-wide"
                      href="#avaliacoes"
                      onClick={() => setMenuOpen(false)}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      {t.nav.avaliacoes}
                    </a>
                    <a
                      className="text-[#c0c0c0] hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-[#5d5d5d]/40 font-medium tracking-wide"
                      href="#contato"
                      onClick={() => setMenuOpen(false)}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      {t.nav.contato}
                    </a>

                    {/* Bandeiras e botão para mobile */}
                    <div className="sm:hidden flex flex-col gap-3 pt-3 mt-2 border-t border-[#5d5d5d]/40">
                      <div className="flex gap-3 justify-center px-2">
                        <button
                          onClick={() => handleLanguageChange('pt')}
                          className={`relative p-2 rounded-lg hover:scale-110 transition-all duration-300 ${language === 'pt' ? 'scale-110 bg-[#5d5d5d]/40 ring-2 ring-white/20 shadow-lg shadow-white/10' : 'opacity-60 hover:opacity-100'}`}
                          title="Português"
                        >
                          <span className={`block text-2xl transition-all duration-500 ${language === 'pt' ? 'animate-bounce' : ''}`}>🇧🇷</span>
                          {language === 'pt' && (
                            <span className="absolute inset-0 rounded-lg bg-white/20 animate-ping" />
                          )}
                        </button>
                        <button
                          onClick={() => handleLanguageChange('en')}
                          className={`relative p-2 rounded-lg hover:scale-110 transition-all duration-300 ${language === 'en' ? 'scale-110 bg-[#5d5d5d]/40 ring-2 ring-white/20 shadow-lg shadow-white/10' : 'opacity-60 hover:opacity-100'}`}
                          title="English"
                        >
                          <span className={`block text-2xl transition-all duration-500 ${language === 'en' ? 'animate-bounce' : ''}`}>🇺🇸</span>
                          {language === 'en' && (
                            <span className="absolute inset-0 rounded-lg bg-white/20 animate-ping" />
                          )}
                        </button>
                        <button
                          onClick={() => handleLanguageChange('es')}
                          className={`relative p-2 rounded-lg hover:scale-110 transition-all duration-300 ${language === 'es' ? 'scale-110 bg-[#5d5d5d]/40 ring-2 ring-white/20 shadow-lg shadow-white/10' : 'opacity-60 hover:opacity-100'}`}
                          title="Español"
                        >
                          <span className={`block text-2xl transition-all duration-500 ${language === 'es' ? 'animate-bounce' : ''}`}>🇪🇸</span>
                          {language === 'es' && (
                            <span className="absolute inset-0 rounded-lg bg-white/20 animate-ping" />
                          )}
                        </button>
                      </div>

                      <a
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#c0c0c0] transition-all duration-200 text-center hover:scale-105"
                        href="https://wa.me/5547997544289"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setMenuOpen(false)}
                      >
                        {t.hero.btnQueroTreinar}
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            {/* Logo e Nome - Centro */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <a href="#inicio" className="flex flex-col items-center group">
                <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-white group-hover:text-[#c0c0c0] transition-colors duration-200">
                  NO SHAME
                </span>
                <span className="text-xs sm:text-sm tracking-widest text-[#c0c0c0] group-hover:text-white transition-colors duration-200">
                  JIU JITSU
                </span>
              </a>
            </div>

            {/* Idiomas e Botão - Direita */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Bandeiras de Idioma */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-[#5d5d5d]/20 border border-[#5d5d5d]/30">
                <button
                  onClick={() => handleLanguageChange('pt')}
                  className={`relative p-1.5 rounded-lg hover:scale-110 transition-all duration-300 ${language === 'pt' ? 'scale-110 bg-[#5d5d5d]/50 ring-2 ring-white/30 shadow-lg shadow-white/20' : 'opacity-60 hover:opacity-100'}`}
                  title="Português"
                >
                  <span className={`block transition-all duration-500 ${language === 'pt' ? 'animate-bounce' : ''}`}>🇧🇷</span>
                  {language === 'pt' && (
                    <span className="absolute inset-0 rounded-lg bg-white/20 animate-ping" />
                  )}
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`relative p-1.5 rounded-lg hover:scale-110 transition-all duration-300 ${language === 'en' ? 'scale-110 bg-[#5d5d5d]/50 ring-2 ring-white/30 shadow-lg shadow-white/20' : 'opacity-60 hover:opacity-100'}`}
                  title="English"
                >
                  <span className={`block transition-all duration-500 ${language === 'en' ? 'animate-bounce' : ''}`}>🇺🇸</span>
                  {language === 'en' && (
                    <span className="absolute inset-0 rounded-lg bg-white/20 animate-ping" />
                  )}
                </button>
                <button
                  onClick={() => handleLanguageChange('es')}
                  className={`relative p-1.5 rounded-lg hover:scale-110 transition-all duration-300 ${language === 'es' ? 'scale-110 bg-[#5d5d5d]/50 ring-2 ring-white/30 shadow-lg shadow-white/20' : 'opacity-60 hover:opacity-100'}`}
                  title="Español"
                >
                  <span className={`block transition-all duration-500 ${language === 'es' ? 'animate-bounce' : ''}`}>🇪🇸</span>
                  {language === 'es' && (
                    <span className="absolute inset-0 rounded-lg bg-white/20 animate-ping" />
                  )}
                </button>
              </div>

              {/* Botão WhatsApp */}
              <a
                className="rounded-full bg-white px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-[#c0c0c0] transition-all duration-200 hidden sm:inline-flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl"
                href="https://wa.me/5547997544289"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="hidden md:inline">{t.hero.btnQueroTreinar}</span>
                <span className="md:hidden">Treinar</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative">
        <div className={`transition-all duration-300 ${isChangingLanguage ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
          <div className="relative h-[62vh] min-h-[420px] w-full">
            <Image
              src="/treinoJiuJitsuPrincipal.png"
              alt="Treino de Jiu-Jitsu"
              fill
              className="object-cover brightness-[0.55]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          <div className="mx-auto -mt-28 max-w-5xl px-4 pb-10">
            <div className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/30 p-8 backdrop-blur">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.hero.title}</h1>
              <p className="mt-2 text-[#c0c0c0]">{t.hero.subtitle}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#horarios"
                  className="rounded-full border border-[#5d5d5d] bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#5d5d5d]/50 transition-colors"
                >
                  {t.hero.btnVerHorarios}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="border-y border-[#5d5d5d]/30 bg-[#5d5d5d]/10">
        <div ref={benefitsReveal.ref} className={`mx-auto max-w-5xl px-4 py-12 transition-all duration-1000 ${isChangingLanguage ? 'opacity-0 translate-y-2' : benefitsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-center text-2xl font-bold tracking-tight">{t.benefits.title}</h2>
          <p className="mt-2 text-center text-[#c0c0c0]">{t.benefits.subtitle}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.benefits.trialTitle}</h3>
              <p className="mt-2 text-[#c0c0c0] leading-relaxed">
                {t.benefits.trialDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                {/* Ícone: Calendário (Plano Completo) */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="2" stroke="currentColor" fill="none" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4M3 9h18" />
                  <rect x="7" y="13" width="2" height="2" rx="1" fill="currentColor" />
                  <rect x="11" y="13" width="2" height="2" rx="1" fill="currentColor" />
                  <rect x="15" y="13" width="2" height="2" rx="1" fill="currentColor" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.benefits.planTitle}</h3>
              <p className="mt-2 text-[#c0c0c0] leading-relaxed">
                {t.benefits.planDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                {/* Ícone: Casa (Ambiente Profissional) */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 11.5L12 5l9 6.5M5 10v8a2 2 0 002 2h10a2 2 0 002-2v-8" />
                  <rect x="9" y="14" width="6" height="4" rx="1" fill="currentColor" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.benefits.ambTitle}</h3>
              <p className="mt-2 text-[#c0c0c0] leading-relaxed">
                {t.benefits.ambDesc}
              </p>
            </div>


            <div className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.benefits.kimonoTitle}</h3>
              <p className="mt-2 text-[#c0c0c0] leading-relaxed">
                {t.benefits.kimonoDesc}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/5547997544289"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-[#c0c0c0] transition-colors"
            >
              {t.benefits.btnAgendar}
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-5xl px-4 py-12">
        <div ref={aboutReveal.ref} className={`transition-all duration-1000 ${isChangingLanguage ? 'opacity-0 translate-x-2' : aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
            <div className="relative h-full min-h-[400px] md:min-h-0 md:h-auto flex-1 flex items-stretch">
              <div className="relative w-full h-full min-h-[400px] md:min-h-0 md:h-auto overflow-hidden rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 flex-1 flex items-stretch">
                <Image src="/fotoProfessor.jpeg" alt="Professor" fill className="object-cover md:object-cover object-top" style={{objectFit:'cover'}} />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-tight">{t.about.professorName}</h2>
              {t.about.bio.map((paragraph: string, idx: number) => (
                <p key={idx} className="mt-3 text-[#c0c0c0] leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="border-y border-[#5d5d5d]/30 bg-[#5d5d5d]/10">
        <div ref={missionReveal.ref} className={`mx-auto max-w-5xl px-4 py-12 transition-all duration-1000 ${isChangingLanguage ? 'opacity-0 -translate-x-2' : missionReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`transition-all duration-300 text-center ${isChangingLanguage ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{t.history.title}</h2>
            <p className="text-lg text-[#c0c0c0] leading-relaxed mb-10">
              {t.history.text}
            </p>
          </div>
          {/* Carrossel lateral para missão, valores e visão */}
          <MissionCarousel slides={t.mission.slides} phrase={t.mission.phrase} />
        </div>
      </section>

      {/* Horários */}
      <section id="horarios" className="border-y border-[#5d5d5d]/30 bg-[#5d5d5d]/10">
        <div ref={scheduleReveal.ref} className={`mx-auto max-w-5xl px-4 py-12 transition-all duration-1000 ${isChangingLanguage ? 'opacity-0 scale-95' : scheduleReveal.isVisible ? 'opacity-100 scale-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl font-bold tracking-tight">{t.schedule.title}</h2>
          <p className="mt-2 text-sm text-[#c0c0c0]">{t.schedule.subtitle}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 items-start">
            {horariosData[language].map((h) => {
              const isExpanded = expandedDays.includes(h.dia);
              return (
                <div key={h.dia} className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 overflow-hidden w-full">
                  <button
                    onClick={() => toggleDay(h.dia)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-[#5d5d5d]/40 transition-colors group"
                  >
                    <div>
                      <h3 className="font-semibold">{h.dia}</h3>
                      {!isExpanded && (
                        <p className="text-sm text-[#c0c0c0] mt-1">
                          {h.itens.length} {h.itens.length === 1 ? t.schedule.aula : t.schedule.aulas}
                        </p>
                      )}
                    </div>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 text-[#c0c0c0] group-hover:text-white flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <ul className="px-6 pb-6 space-y-2 text-[#c0c0c0]">
                      {h.itens.map((item) => (
                        <li key={item} className="rounded-xl bg-black/40 px-3 py-2 text-sm leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="mx-auto max-w-5xl px-4 py-12">
        <div ref={galleryReveal.ref} className={`transition-all duration-1000 ${isChangingLanguage ? 'opacity-0' : galleryReveal.isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl font-bold tracking-tight">{t.gallery.title}</h2>

          <div className="relative mt-6">
            {/* Botão Anterior */}
            <button
              onClick={prevGallery}
              disabled={currentGalleryIndex === 0}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 rounded-full border border-[#5d5d5d] bg-black/90 p-3 hover:bg-[#5d5d5d]/50 disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur transition-all"
              aria-label={t.gallery.previous}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Container das imagens */}
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentGalleryIndex / 3) * 100}%)` }}
              >
                {galeria.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[16/10] flex-shrink-0 overflow-hidden rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20"
                    style={{ width: 'calc(33.333% - 0.667rem)' }}
                  >
                    <Image src={src} alt="Foto de treino" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Botão Próximo */}
            <button
              onClick={nextGallery}
              disabled={currentGalleryIndex + 3 >= galeria.length}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full border border-[#5d5d5d] bg-black/90 p-3 hover:bg-[#5d5d5d]/50 disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur transition-all"
              aria-label={t.gallery.next}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: Math.ceil(galeria.length / 3) }).map((_, index) => (
                <button
                  key={`gallery-indicator-${index}`}
                  onClick={() => setCurrentGalleryIndex(index * 3)}
                  className={`h-2 rounded-full transition-all ${currentGalleryIndex === index * 3
                    ? 'w-8 bg-white'
                    : 'w-2 bg-[#5d5d5d] hover:bg-[#c0c0c0]'
                    }`}
                  aria-label={`Ir para grupo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="border-y border-[#5d5d5d]/30 bg-[#5d5d5d]/10">
        <div ref={reviewsReveal.ref} className={`mx-auto max-w-5xl px-4 py-12 transition-all duration-1000 ${isChangingLanguage ? 'opacity-0 translate-y-4' : reviewsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">{t.reviews.title}</h2>
            <a
              href="https://www.google.com/maps/place/NoShame+Jiu+Jitsu/@-27.6018426,-48.4676397,15z/data=!4m8!3m7!1s0x95273f02f676f9c1:0x35e73bfd3464618c!8m2!3d-27.6018561!4d-48.4677142!9m1!1b1!16s%2Fg%2F11xh5vhv0y?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#c0c0c0] hover:text-white transition-colors"
            >
              {t.reviews.linkGoogle}
            </a>
          </div>

          <div className="relative mt-6">
            {/* Botão Anterior */}
            <button
              onClick={prevReview}
              disabled={currentReviewIndex === 0}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 rounded-full border border-[#5d5d5d] bg-black/90 p-3 hover:bg-[#5d5d5d]/50 disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur transition-all"
              aria-label="Avaliações anteriores"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Container das avaliações */}
            <div className="overflow-hidden">
              <div
                className="flex gap-5 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentReviewIndex / 3) * 100}%)` }}
              >
                {avaliacoes.map((review, idx) => (
                  <div 
                    key={idx}
                    className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 p-6 flex flex-col hover:bg-[#5d5d5d]/30 transition-all duration-300 flex-shrink-0"
                    style={{ width: 'calc(33.333% - 0.834rem)' }}
                  >
                    <div className="flex-1">
                      <h3 className="text-base font-bold mb-2">{review.nome}</h3>
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: review.avaliacao }).map((_, i) => (
                          <svg key={`star-${idx}-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-[#c0c0c0] leading-relaxed italic">
                        "{review.comentario[language]}"
                      </p>
                    </div>
                    <span className="text-xs text-[#c0c0c0] mt-3 block">{review.data[language]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botão Próximo */}
            <button
              onClick={nextReview}
              disabled={currentReviewIndex + 3 >= avaliacoes.length}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full border border-[#5d5d5d] bg-black/90 p-3 hover:bg-[#5d5d5d]/50 disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur transition-all"
              aria-label="Próximas avaliações"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: Math.ceil(avaliacoes.length / 3) }).map((_, index) => (
                <button
                  key={`review-indicator-${index}`}
                  onClick={() => setCurrentReviewIndex(index * 3)}
                  className={`h-2 rounded-full transition-all ${currentReviewIndex === index * 3
                    ? 'w-8 bg-white'
                    : 'w-2 bg-[#5d5d5d] hover:bg-[#c0c0c0]'
                    }`}
                  aria-label={`Ir para grupo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="border-t border-[#5d5d5d]/30 bg-[#5d5d5d]/10">
        <div ref={contactReveal.ref} className={`mx-auto max-w-5xl px-4 py-12 transition-all duration-1000 ${isChangingLanguage ? 'opacity-0 translate-y-4' : contactReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl font-bold tracking-tight">{t.contact.title}</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 p-6">
              <h3 className="font-semibold">{t.contact.subtitle}</h3>
              <p className="mt-3 text-[#c0c0c0]">(47) 99754-4289</p>
              <p className="mt-2 text-[#c0c0c0]">
                R. Afonso Luís Borba, 382<br />
                Lagoa da Conceição, Florianópolis - SC.
              </p>

              <div className="mt-5">
                <a
                  className="inline-block rounded-full border border-[#5d5d5d] px-5 py-2.5 text-sm font-semibold hover:bg-[#5d5d5d]/50 transition-colors"
                  href="https://www.instagram.com/ctnoshamebjj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-[#5d5d5d] bg-[#5d5d5d]/20 p-6">
              <h3 className="font-semibold">{t.contact.mapTitle}</h3>
              <div className="mt-4 aspect-[16/10] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.7318284840358!2d-48.46763970000001!3d-27.6018426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273f02f676f9c1%3A0x35e73bfd3464618c!2sNoShame%20Jiu%20Jitsu!5e0!3m2!1spt-BR!2sbr!4v1770585940544!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NoShame Jiu Jitsu Location Map"
                />
              </div>
            </div>
          </div>

          <footer className="mt-10 text-sm text-[#c0c0c0]">
            © {new Date().getFullYear()} {t.contact.footer}
          </footer>
        </div>
      </section>
    </div>
  );
}
