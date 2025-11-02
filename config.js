var config = {
    style:'mapbox://styles/anaatientas/cmhgind1j008o01qx6x8p20b9',
    // leave commented to use Mapbox Standard Style
    accessToken:'pk.eyJ1IjoiYW5hYXRpZW50YXMiLCJhIjoiY21oZ2llZGY1MDlnODJsc2hmY2QzNmgwYiJ9.ZPzy00sfHhmb7-qMOzKJUA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Diario de sueños rotos',
    subtitle: 'Emprendemos un viaje por seis países donde, en apenas un mes, la Generación Z encendió una chispa de inconformidad que cruzó fronteras. Desde el sudeste asiático hasta el Magreb, miles de jóvenes salieron a las calles movidos por una frustración común: corrupción, censura, desigualdad o abandono estatal y un futuro que sienten secuestrado por las viejas élites.',
    byline: 'Este diario no pretende dar respuestas ni siquiera explicar lo sucedido. Solo busca, con unas pinceladas de hechos, despertar la curiosidad y las ganas de saber más sobre quienes son los verdaderos/as protagonistas de estas historias. Nada más.',
    footer: ' Source: Wikipedia & WikiMedia, RTVE. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '25 agosta 2025 (Indonesia)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/August_2025_protests_in_Jakarta_01_%28cropped%29.jpg/330px-August_2025_protests_in_Jakarta_01_%28cropped%29.jpg',
            description: 'En Yakarta estallaron protestas inicialmente pacíficas tras el anuncio del aumento salarial de los diputados. Los manifestantes exigían su anulación y reformas profundas para mejorar la calidad de vida.<br>El gobierno respondió con un fuerte despliegue policial. El 28 de agosto, la muerte de un mototaxista de 21 años atropellado por un vehículo blindado se viralizó, desatando una ola de indignación y extendiendo las <a href="https://es.wikipedia.org/wiki/Protestas_en_Indonesia_de_agosto-septiembre_de_2025"target="_blank"> protestas por todo el país</a>.',
            location: {
                center: [106.85459, -6.11855],
                zoom: 5,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'first-identifier',
            alignment: 'right',
            hidden: false,
            title: '8 septiembre 2025 (Nepal)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2025_Nepalese_Gen_Z_protesters_infront_of_Bharatpur_mahanagarpalika_office.jpg/960px-2025_Nepalese_Gen_Z_protesters_infront_of_Bharatpur_mahanagarpalika_office.jpg?20250910045903',
            description: 'El gobierno nepalí ordenó bloquear más de 20 plataformas de redes sociales tras el frustado intento de «supervisar el contenido peligroso y engañoso de internet». Al día siguiente,<a href="https://es.wikipedia.org/wiki/Protestas_en_Nepal_de_2025"target="_blank"> miles de jóvenes tomaron las calles</a> para defender la libertad digital.<br>En Katmandú, los manifestantes rodearon el parlamento y obligaron a la policía antidisturbios a retroceder. Las fuerzas del orden abrieron fuego con munición real: 17 muertos y decenas de heridos marcaron el día más trágico de las protestas hasta entonces.',
            location: {
                center: [85.33726652769991,27.689061231581874],
                zoom: 8,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: '11 de septiembre 2025 (Filipinas)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Smokes%2C_fire_and_a_flag.jpg/250px-Smokes%2C_fire_and_a_flag.jpg',
            description: 'Las peores inundaciones en décadas destaparon una red de corrupción que desvió fondos destinados a obras de control climático. Muchas infraestructuras nunca se construyeron o resultaron inservibles. El 11 de septiembre, miles de estudiantes filipinos salieron a las calles para denunciar la corrupción gubernamental. Diez días después, el 21, se realizó <a href="https://en.wikipedia.org/wiki/Trillion_Peso_March#:~:text=The%20Trillion%20Peso%20March%20was,held%20on%20September%2021%2C%202025."target="_blank">la Marcha del Billón de Pesos</a>, una movilización masiva de sindicatos, estudiantes y organizaciones civiles que denunció el desvío de más de 1,9 billones de pesos filipinos en proyectos de control de inundaciones durante los últimos quince años.',
            location: {
                center: [120.9867702452654,14.587946241802996],
                zoom: 6,
                pitch: 6,
                bearing: -2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: '20 septiembre 2025 (Perú)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Protestas_de_la_Generaci%C3%B3n_Z_en_Per%C3%BA_del_2025_50.jpg/500px-Protestas_de_la_Generaci%C3%B3n_Z_en_Per%C3%BA_del_2025_50.jpg',
            description: 'El Congreso peruano aprobó una polémica reforma del sistema de pensiones que aumentaba la edad de jubilación y ampliaba la participación privada. Gremios, organizaciones sociales y colectivos juveniles convocaron manifestaciones inmediatas.<br>Los disturbios dejaron edificios incendiados y carreteras bloqueadas en Lima. Con el paso de los días, las demandas se ampliaron: derogación de la reforma, seguridad, oportunidades laborales y la renuncia de la presidenta Dina Boluarte. <a href="https://es.wikipedia.org/wiki/Protestas_de_la_generaci%C3%B3n_Z_en_Per%C3%BA"target="_blank">Jóvenes</a> inspirados en el modelo de resistencia nepalí asumieron el liderazgo de las protestas.',
            location: {
                center: [-77.06290036441898,-12.077701456757836],
                zoom: 5,
                pitch: 40,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: '25 septiembre 2025 (Madagascar)',
            image: 'https://img.rtve.es/n/16772773?w=800&preview=01760643795370.jpg',
            // de Magascar no encontré imagen libre de derecho, de forma provisional he puesto esta ya que sería solo para que se evaluara el trbajo y después ya lo borraría.
            description: 'Tras años de cortes eléctricos y escasez de agua, <a href="https://es.wikipedia.org/wiki/Protestas_en_Madagascar_de_2025" target="_blank">la juventud malgache dijo basta</a>. Bajo el lema “Hartos de los apagones”, miles de personas se reunieron en Antananarivo para reclamar servicios básicos.<br>Pese a la prohibición de la manifestación en el parque Ambohijatovo, la multitud ignoró las órdenes y marchó pacíficamente. La represión policial con gases lacrimógenos desató el caos: docenas de detenidos y cinco muertos, entre ellos dos niños.',
            location: {
                center: [47.527898154468375,-18.910728002148176],
                zoom: 5.5,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'five-chapter',
            alignment: 'fully',
            hidden: false,
            title: '27 septiembre 2025 (Marruecos)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/GenZ_212_demonstrations_in_Rabat_01.jpg/330px-GenZ_212_demonstrations_in_Rabat_01.jpg',
            description: 'Las protestas en <a href="https://es.wikipedia.org/wiki/Protestas_en_Marruecos_de_2025" target="_blank">Marruecos de 2025</a> fueron una serie de manifestaciones y disturbios masivos que estallaron a finales de septiembre en distintas ciudades del país. Las movilizaciones, protagonizadas principalmente por jóvenes de la Generación Z, expresaron el descontento ante la crisis económica, el deterioro de los servicios públicos y la priorización de la inversión estatal en infraestructuras deportivas por encima de sectores como la educación y la sanidad.<br>Las primeras concentraciones se registraron el 27 de septiembre de 2025 en Rabat, Casablanca, Marrakech, Agadir y Tánger. En la capital, la juventud marroquí se reunió en el centro de la ciudad tras una convocatoria del movimiento Gen Z 212, para exigir “el derecho a la salud, la educación y una vida digna” y expresar su rechazo al gobierno de Mohamed VI.',
            location: {
                center: [-6.83354, 34.02140],
                zoom: 5,
                pitch: 40,
                bearing: -180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
