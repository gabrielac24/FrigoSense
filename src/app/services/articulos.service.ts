// articulos.service.ts
import { Injectable } from '@angular/core';
import { Article } from '../models/articulo.model'; 

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private articles: Article[] = [
    // Artículo destacado (Nutrición)
    {
      id: 1,
      category: 'Nutrición',
      title: '¿Los carbohidratos engordan? Descubre la verdad',
      date: '15 Junio 2023',
      readTime: '8 min lectura',
      image: './assets/img/carbohidratos.png',
      image2: '/assets/img/carbohidratos.png',
      excerpt: 'Uno de los mitos más persistentes en nutrición es que los carbohidratos son el enemigo número uno de la pérdida de peso.',
      myth: 'Debes eliminar todos los carbohidratos para bajar de peso',
      truth: 'Los carbohidratos de calidad son esenciales para una dieta equilibrada',
      content: '<h2>¿Los carbohidratos engordan? Descubre la verdad</h2><p>Durante décadas, los carbohidratos han sido señalados como los principales culpables del aumento de peso. Muchas dietas populares los eliminan por completo, promoviendo la idea de que consumirlos inevitablemente conduce a ganar grasa corporal. Pero, ¿qué tan cierto es esto?</p><h2>El mito de los carbohidratos</h2><p>Es común escuchar frases como: <em>“si quieres bajar de peso, deja el pan”</em>, o <em>“los carbohidratos son azúcar pura”</em>. Este tipo de afirmaciones han contribuido a una percepción errónea de los carbohidratos. La verdad es que no todos los carbohidratos son iguales, y eliminarlos por completo puede tener consecuencias negativas para tu salud.</p><h2>¿Qué son los carbohidratos?</h2><p>Los <strong>carbohidratos</strong> son uno de los tres macronutrientes esenciales en la alimentación humana, junto con las proteínas y las grasas. Su función principal es proporcionar energía al cuerpo, especialmente al cerebro y al sistema nervioso central.</p><p>Existen tres tipos principales de carbohidratos:</p><ul><li><strong>Azúcares:</strong> como la glucosa, fructosa y sacarosa.</li><li><strong>Almidones:</strong> carbohidratos complejos que se encuentran en alimentos como arroz, pasta y legumbres.</li><li><strong>Fibra:</strong> una forma de carbohidrato que el cuerpo no puede digerir, pero que ayuda a la salud digestiva.</li></ul><h2>Carbohidratos buenos vs. malos</h2><p>La clave está en diferenciar entre <strong>carbohidratos de calidad</strong> y los ultraprocesados. Los carbohidratos integrales, como frutas, verduras, legumbres y granos enteros, están llenos de fibra, vitaminas y minerales. Estos deben ser la base de tu consumo diario.</p><p>Por otro lado, los carbohidratos refinados, como el pan blanco, pasteles y azúcares añadidos, tienen poco valor nutricional y sí pueden contribuir al aumento de peso si se consumen en exceso.</p><h2>¿Debes eliminar los carbohidratos para bajar de peso?</h2><p><strong>No.</strong> De hecho, reducirlos drásticamente puede provocar fatiga, mal humor, estreñimiento y dificultades para concentrarte. El cuerpo necesita una fuente constante de energía para funcionar correctamente.</p><p>En lugar de eliminarlos, enfócate en la calidad: consume carbohidratos complejos, evita los azúcares añadidos, y mantén un equilibrio saludable con el resto de tus nutrientes. Así, no solo podrás controlar tu peso, sino también mejorar tu salud en general.</p><h2>Conclusión</h2><p>Los carbohidratos no son tus enemigos. Elegir fuentes saludables y consumirlos con moderación es la mejor estrategia. Eliminar un grupo entero de alimentos rara vez es la solución, y mucho menos cuando se trata de nutrientes tan importantes para el funcionamiento del cuerpo.</p><p><strong>Recuerda:</strong> una dieta balanceada y sostenible es más efectiva a largo plazo que cualquier solución extrema o moda pasajera.</p>',
      author: 'Dr. Nutrición'
    },
    // Más artículos de Nutrición
    {
      id: 4,
      category: 'Nutrición',
      title: 'El mito de las dietas altas en proteínas',
      date: '20 Junio 2023',
      readTime: '7 min lectura',
      image: './assets/img/proteinas.png',
      image2: '',
      excerpt: '¿Realmente necesitamos tanta proteína como promueven algunas dietas?',
      myth: 'Mientras más proteína consumas, más músculo ganarás',
      truth: 'El exceso de proteína se convierte en energía o se almacena como grasa',
      content: '<h2>El mito de las dietas altas en proteínas</h2><p>Aunque las dietas altas en proteínas se han popularizado por su asociación con el aumento de masa muscular, la realidad es que el cuerpo solo puede utilizar cierta cantidad de proteína para la síntesis muscular. El exceso no se traduce en más músculo, sino que puede convertirse en energía o incluso almacenarse como grasa. Además, una ingesta excesiva y prolongada puede sobrecargar los riñones y afectar la salud a largo plazo.</p><h2>¿Cuánta proteína necesitamos realmente?</h2><p>La cantidad recomendada varía según la edad, el sexo, y el nivel de actividad física, pero en general, una persona promedio no necesita suplementos ni cantidades excesivas para mantener una buena salud muscular.</p><h2>Calidad sobre cantidad</h2><p>Es fundamental priorizar fuentes de proteína magras y variadas, como pescado, pollo, huevos, legumbres y productos lácteos bajos en grasa. Estas opciones aportan otros nutrientes valiosos y son más saludables a largo plazo.</p><h2>Conclusión</h2><p>Más proteína no siempre es mejor. El equilibrio nutricional es clave para una dieta saludable y sostenible. Consultar a un profesional de la salud puede ayudarte a determinar tus verdaderas necesidades proteicas y evitar excesos innecesarios.</p>',
      author: 'Dr. Nutrición'
    },
    {
      id: 5,
      category: 'Nutrición',
      title: 'Los alimentos "light" no son siempre la mejor opción',
      date: '18 Junio 2023',
      readTime: '5 min lectura',
      image: './assets/img/light.png',
      image2: '/assets/img/light.png',
      excerpt: 'La verdad sobre los productos light y su impacto real en la pérdida de peso',
      myth: 'Los productos light ayudan automáticamente a perder peso',
      truth: 'Muchos productos light contienen otros ingredientes poco saludables',
      content: '<h2>Los alimentos "light" no son siempre la mejor opción</h2><p>En los supermercados abundan los productos etiquetados como "light", lo que lleva a muchas personas a creer que son automáticamente más saludables o ideales para bajar de peso. Sin embargo, esta percepción puede ser engañosa.</p><h2>¿Qué significa realmente "light"?</h2><p>Un alimento "light" suele tener una reducción de al menos un 30% en algún componente, como grasa, azúcar o calorías, en comparación con su versión original. Pero esto no significa que sea saludable, ya que esa reducción puede venir acompañada de aditivos, sodio u otros ingredientes no deseables.</p><h2>Los peligros ocultos</h2><p>Muchos productos light compensan la reducción de azúcar o grasa con ingredientes artificiales, edulcorantes o almidones que pueden alterar el metabolismo y afectar la salud digestiva. Además, algunas personas tienden a consumir mayores cantidades de estos productos creyendo que no afectan su peso.</p><h2>La importancia de leer etiquetas</h2><p>Más allá de la palabra "light", es fundamental leer las etiquetas nutricionales para entender qué estamos consumiendo realmente. Un producto con menos grasa puede tener más azúcar, y uno sin azúcar puede contener edulcorantes artificiales que no todos toleran bien.</p><h2>Conclusión</h2><p>No todos los productos "light" son opciones saludables. Lo mejor es basar la alimentación en productos frescos y naturales, y utilizar los alimentos procesados con moderación, independientemente de que sean light o no.</p>',
      author: 'Nutricionista Salud'
    },
    {
      id: 6,
      category: 'Nutrición',
      title: 'El mito de no comer después de las 8pm',
      date: '12 Junio 2023',
      readTime: '6 min lectura',
      image: './assets/img/cena.png',
      image2: '/assets/img/cena.png',
      excerpt: '¿Realmente importa la hora en que comes o solo lo que comes?',
      myth: 'Comer después de las 8pm engorda más',
      truth: 'Lo que importa es el total calórico diario, no la hora de consumo',
      content: '<h2>El mito de no comer después de las 8pm</h2><p>Durante años, se ha repetido la idea de que comer después de cierta hora, especialmente después de las 8pm, conduce inevitablemente al aumento de peso. Esta creencia ha llevado a muchas personas a evitar cenas o incluso a acostarse con hambre.</p><h2>¿De dónde viene este mito?</h2><p>La lógica detrás de este mito sugiere que el metabolismo se ralentiza por la noche y que el cuerpo no "quema" lo que se consume a última hora. Sin embargo, la evidencia científica muestra que lo que realmente influye en el peso corporal es el total de calorías ingeridas y gastadas a lo largo del día, no la hora específica en que se comen.</p><h2>¿Qué dice la ciencia?</h2><p>Estudios han demostrado que mientras la calidad y la cantidad de los alimentos se mantengan bajo control, el momento del consumo tiene un impacto mínimo en el peso. Comer tarde puede estar asociado con elecciones alimentarias menos saludables o comer por aburrimiento, lo cual sí puede influir negativamente, pero no es por la hora en sí.</p><h2>Lo importante es el balance</h2><p>Más que fijarse en un horario estricto, lo ideal es mantener una alimentación equilibrada durante todo el día. Si cenas tarde, opta por comidas ligeras y nutritivas, evitando alimentos ultraprocesados y altos en azúcares o grasas saturadas.</p><h2>Conclusión</h2><p>No es la hora, sino lo que y cuánto comes lo que influye en tu peso. Comer después de las 8pm no engorda por sí solo. Mantén hábitos saludables y escucha las señales de hambre de tu cuerpo, sin caer en mitos sin fundamento.</p>',
      author: 'Dra. Alimentación'
    },
    // Artículos de Ejercicio
    {
      id: 2,
      category: 'Ejercicio',
      title: 'Sudar más no significa quemar más grasa',
      date: '10 Junio 2023',
      readTime: '6 min lectura',
      image: './assets/img/ejercicio.png',
      image2: 'assets/img/ejercicio.png',
      excerpt: 'Muchas personas creen que mientras más suden durante el ejercicio, más grasa están perdiendo.',
      myth: 'Sudar mucho significa que estás quemando más grasa',
      truth: 'La sudoración es un mecanismo de refrigeración del cuerpo',
      content: '<h2>Sudar más no significa quemar más grasa</h2><p>Muchas personas creen que mientras más suden durante el ejercicio, más grasa están perdiendo. Sin embargo, esta idea es un mito común que puede llevar a malinterpretar los procesos del cuerpo.</p><h2>¿Qué es realmente la sudoración?</h2><p>La sudoración es un mecanismo natural de refrigeración del cuerpo para mantener la temperatura adecuada durante la actividad física o en ambientes calurosos. No está directamente relacionada con la quema de grasa.</p><h2>¿Cómo se quema la grasa entonces?</h2><p>La quema de grasa depende del equilibrio entre las calorías consumidas y gastadas, así como del tipo, duración e intensidad del ejercicio, no de la cantidad de sudor producido.</p><h2>Consejos para una quema de grasa efectiva</h2><p>Enfócate en ejercicios aeróbicos y de fuerza combinados con una alimentación equilibrada. No te guíes por la cantidad de sudor para medir la efectividad de tu entrenamiento.</p><h2>Conclusión</h2><p>Sudar es solo un método de enfriamiento del cuerpo, no un indicador de quema de grasa. Para perder grasa, el enfoque debe estar en la dieta y el ejercicio adecuado.</p>',
      author: 'Entrenador Activo'
    },
    {
      id: 7,
      category: 'Ejercicio',
      title: 'El mito de los abdominales para perder barriga',
      date: '22 Junio 2023',
      readTime: '7 min lectura',
      image: './assets/img/abdominales.png',
      image2: '/assets/img/abdominales.png',
      excerpt: 'Hacer cientos de abdominales no es la solución para tener un vientre plano',
      myth: 'Los ejercicios abdominales queman la grasa localizada',
      truth: 'No se puede reducir grasa en zonas específicas con ejercicios localizados',
      content: '<h2>El mito de los abdominales para perder barriga</h2><p>Muchas personas creen que hacer cientos de abdominales diariamente es la clave para eliminar la grasa del vientre y conseguir un abdomen plano. Sin embargo, esta creencia es un mito muy extendido en el mundo del fitness.</p><h2>¿Por qué no funcionan los abdominales para quemar grasa localizada?</h2><p>El cuerpo no quema grasa de forma localizada. Cuando realizas ejercicios específicos, como abdominales, fortaleces los músculos de esa zona, pero la grasa se reduce de manera general en todo el cuerpo a través de un déficit calórico y actividad física constante.</p><h2>La importancia del enfoque integral</h2><p>Para reducir la grasa abdominal es fundamental combinar ejercicios cardiovasculares, entrenamiento de fuerza general y una alimentación equilibrada. Solo así se logra la pérdida de grasa corporal total, incluyendo la zona abdominal.</p><h2>Consejos para un abdomen más definido</h2><p>Además de entrenar el core, es importante mantener hábitos saludables, controlar el consumo calórico y evitar el estrés, que puede favorecer la acumulación de grasa visceral.</p><h2>Conclusión</h2><p>Los abdominales fortalecen los músculos pero no queman la grasa localizada. Para perder barriga, es clave un enfoque global que incluya dieta, ejercicio y estilo de vida saludable.</p>',
      author: 'Entrenador Fitness'
    },
    {
      id: 8,
      category: 'Ejercicio',
      title: 'Cardio vs Pesas: ¿Cuál es mejor?',
      date: '17 Junio 2023',
      readTime: '9 min lectura',
      image: 'assets/img/cardio-pesas.png',
      image2: '/assets/img/cardio-pesas.png',
      excerpt: 'Descubre qué tipo de ejercicio es más efectivo para tus objetivos',
      myth: 'El cardio es mejor que las pesas para perder peso',
      truth: 'La combinación de ambos es la estrategia más efectiva',
      content: '<h2>Cardio vs Pesas: ¿Cuál es mejor?</h2><p>Muchas personas se preguntan si es mejor hacer solo cardio o enfocarse en el entrenamiento con pesas para alcanzar sus objetivos de pérdida de peso y salud. La verdad es que ambos tienen beneficios únicos y complementarios.</p><h2>Beneficios del cardio</h2><p>El ejercicio cardiovascular ayuda a mejorar la resistencia, la salud cardiovascular y quema calorías durante la actividad. Es excelente para mejorar la capacidad pulmonar y quemar grasa a corto plazo.</p><h2>Beneficios del entrenamiento con pesas</h2><p>El entrenamiento de fuerza contribuye a aumentar la masa muscular, lo que a su vez eleva el metabolismo basal y mejora la composición corporal a largo plazo. También fortalece huesos y articulaciones.</p><h2>La mejor estrategia: combinación</h2><p>Combinar cardio y pesas maximiza los resultados, mejorando la quema de grasa, la tonificación muscular y la salud general. Además, esta combinación ayuda a evitar el aburrimiento y las lesiones.</p><h2>Conclusión</h2><p>No es cuestión de elegir uno sobre otro, sino de integrar ambos en un plan equilibrado para lograr una salud y condición física óptimas.</p>',
      author: 'Coach Deportivo'
    },
    {
      id: 9,
      category: 'Ejercicio',
      title: 'El mito de que el ejercicio quema muchas calorías',
      date: '14 Junio 2023',
      readTime: '5 min lectura',
      image: 'assets/img/calorias.png',
      image2: '/assets/img/calorias.png',
      excerpt: 'La realidad sobre cuántas calorías realmente quemas al ejercitarte',
      myth: 'Una sesión de ejercicio te permite comer lo que quieras',
      truth: 'La alimentación es clave, el ejercicio complementa',
      content: '<h2>El mito de que el ejercicio quema muchas calorías</h2><p>Es común pensar que después de una sesión de ejercicio intensa se puede comer sin restricciones, ya que el cuerpo habrá quemado una gran cantidad de calorías. Sin embargo, esta idea puede llevar a malos hábitos y a un desequilibrio calórico.</p><h2>¿Cuántas calorías se queman realmente?</h2><p>La cantidad de calorías quemadas durante el ejercicio depende del tipo, duración, intensidad y peso corporal, pero generalmente no es suficiente para compensar grandes excesos alimenticios. Por eso, confiar únicamente en el ejercicio para perder peso o mantenerlo puede ser contraproducente.</p><h2>La alimentación como base</h2><p>El ejercicio es un complemento vital para la salud y el bienestar, pero la clave para controlar el peso está en la alimentación. Mantener una dieta equilibrada y consciente es fundamental para lograr resultados duraderos.</p><h2>Consejos para un equilibrio saludable</h2><p>Combina actividad física regular con una alimentación adecuada y evita usar el ejercicio como excusa para comer en exceso. Esto te ayudará a mejorar tu composición corporal y bienestar general.</p><h2>Conclusión</h2><p>El ejercicio quema calorías, pero no tantas como para compensar cualquier exceso alimenticio. La alimentación es la base y el ejercicio un complemento para una vida saludable.</p>',
      author: 'Entrenador Consciente'
    },
    // Artículos de Dietas
    {
      id: 3,
      category: 'Dietas',
      title: 'Las dietas extremas no son la solución a largo plazo',
      date: '5 Junio 2023',
      readTime: '10 min lectura',
      image: 'assets/img/dieta.png',
      image2: '/assets/img/dieta.png',
      excerpt: 'Las dietas de moda que prometen pérdidas de peso rápidas suelen ser ineficaces.',
      myth: 'Mientras más rápida sea la pérdida de peso, mejor',
      truth: 'La pérdida de peso saludable y sostenible es gradual',
      content: '<h2>Las dietas extremas no son la solución a largo plazo</h2><p>Las dietas de moda que prometen pérdidas de peso rápidas suelen atraer a muchas personas, pero a menudo son insostenibles y pueden perjudicar la salud. La pérdida de peso demasiado rápida puede provocar deficiencias nutricionales, pérdida de masa muscular y efecto rebote.</p><h2>¿Por qué no funcionan las dietas extremas?</h2><p>Estas dietas suelen ser muy restrictivas, eliminando grupos enteros de alimentos o reduciendo excesivamente las calorías, lo que dificulta mantenerlas en el tiempo y genera ansiedad o frustración.</p><h2>La importancia de un enfoque saludable</h2><p>Perder peso de forma saludable implica cambios graduales en la alimentación y estilo de vida que sean sostenibles a largo plazo, permitiendo mantener los resultados y mejorar la calidad de vida.</p><h2>Consejos para una pérdida de peso efectiva</h2><p>Incluye una dieta equilibrada, actividad física regular y apoyo profesional cuando sea necesario. Evita soluciones rápidas y apuesta por la constancia y el bienestar integral.</p><h2>Conclusión</h2><p>La pérdida de peso saludable es gradual y sostenible. Las dietas extremas pueden ser dañinas y no garantizan resultados duraderos.</p>',
      author: 'Lic. Saludable'
    },
    {
      id: 10,
      category: 'Dietas',
      title: 'El peligro de las dietas detox',
      date: '25 Junio 2023',
      readTime: '8 min lectura',
      image: 'assets/img/detox.png',
      image2: '/assets/img/detox.png',
      excerpt: 'Por qué las dietas detox pueden ser más dañinas que beneficiosas',
      myth: 'Necesitas desintoxicar tu cuerpo regularmente',
      truth: 'Tu cuerpo ya tiene sistemas naturales de desintoxicación',
      content: '<h2>El peligro de las dietas detox</h2><p>Las dietas detox prometen limpiar el cuerpo de toxinas acumuladas y mejorar la salud en poco tiempo. Sin embargo, muchas de estas dietas carecen de base científica y pueden ser peligrosas para la salud.</p><h2>¿Realmente necesitamos desintoxicar el cuerpo?</h2><p>El cuerpo humano cuenta con órganos especializados, como el hígado y los riñones, que realizan la desintoxicación de manera natural y eficiente sin necesidad de dietas extremas.</p><h2>Riesgos de las dietas detox</h2><p>Estas dietas suelen ser muy restrictivas, pueden causar deficiencias nutricionales, afectar el metabolismo y generar efectos secundarios como fatiga, mareos y problemas digestivos.</p><h2>Alternativas saludables</h2><p>En lugar de dietas detox, se recomienda mantener una alimentación balanceada, hidratación adecuada, actividad física regular y evitar sustancias tóxicas como el tabaco y el alcohol en exceso.</p><h2>Conclusión</h2><p>Tu cuerpo ya tiene sistemas naturales para eliminar toxinas. Las dietas detox no son necesarias y pueden ser perjudiciales. Opta por hábitos saludables y sostenibles.</p>',
      author: 'Dra. Ciencia'
    },
    {
      id: 11,
      category: 'Dietas',
      title: 'El mito de los superalimentos',
      date: '19 Junio 2023',
      readTime: '6 min lectura',
      image: 'assets/img/superalimentos.png',
      image2: '/assets/img/superalimentos.png',
      excerpt: 'No existe un alimento mágico para la pérdida de peso',
      myth: 'Algunos alimentos queman grasa milagrosamente',
      truth: 'Ningún alimento por sí solo causa pérdida de peso significativa',
      content: '<h2>El mito de los superalimentos</h2><p>En los últimos años, han surgido muchos alimentos catalogados como “superalimentos” que supuestamente tienen propiedades milagrosas para quemar grasa y perder peso rápidamente. Esta idea ha generado falsas expectativas y confusión.</p><h2>¿Existen alimentos que queman grasa?</h2><p>La realidad es que ningún alimento por sí solo puede causar una pérdida de peso significativa o mágica. La quema de grasa depende de un balance calórico negativo, es decir, consumir menos calorías de las que el cuerpo gasta.</p><h2>La importancia del contexto</h2><p>Incluir alimentos nutritivos como frutas, verduras, nueces y granos enteros es fundamental para una dieta saludable, pero no hay alimento único que haga la diferencia por sí mismo.</p><h2>Enfoque en hábitos sostenibles</h2><p>La clave está en mantener una alimentación equilibrada, variada y combinada con ejercicio regular, en lugar de buscar soluciones rápidas basadas en alimentos específicos.</p><h2>Conclusión</h2><p>No existen alimentos milagrosos para perder peso. Un estilo de vida saludable y sostenible es la mejor estrategia para lograr y mantener un peso adecuado.</p>',
      author: 'Nutricionista Real'
    },
    {
      id: 12,
      category: 'Dietas',
      title: 'Ayuno intermitente: ¿milagro o moda?',
      date: '13 Junio 2023',
      readTime: '9 min lectura',
      image: 'assets/img/ayuno.png',
      image2: '/assets/img/ayuno.png',
      excerpt: 'La verdad científica detrás del ayuno intermitente',
      myth: 'El ayuno intermitente es la mejor estrategia para todos',
      truth: 'Puede ser útil para algunos pero no es una solución universal',
      content: '<h2>Ayuno intermitente: ¿milagro o moda?</h2><p>El ayuno intermitente se ha popularizado como una estrategia para perder peso y mejorar la salud metabólica. Sin embargo, no es una solución universal ni adecuada para todas las personas.</p><h2>¿Qué es el ayuno intermitente?</h2><p>Consiste en alternar periodos de alimentación con periodos de ayuno, lo que puede ayudar a reducir la ingesta calórica y mejorar ciertos marcadores de salud en algunos individuos.</p><h2>Beneficios y limitaciones</h2><p>El ayuno intermitente puede ser útil para mejorar la sensibilidad a la insulina, facilitar la pérdida de peso y promover la autofagia. No obstante, puede no ser apropiado para personas con ciertas condiciones médicas, embarazadas o con trastornos alimentarios.</p><h2>¿Es para todos?</h2><p>Cada persona responde diferente, por lo que es importante evaluar individualmente su aplicación y siempre contar con supervisión profesional para evitar efectos adversos.</p><h2>Conclusión</h2><p>El ayuno intermitente puede ser una herramienta efectiva para algunos, pero no es un método milagroso ni universal. La mejor estrategia es la alimentación equilibrada y sostenible adaptada a cada persona.</p>',
      author: 'Dr. Evidencia'
    }
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }

  getArticlesByCategory(category: string): Article[] {
    return this.articles.filter(article => article.category === category);
  }
}