const { Telegraf } = require('telegraf');
const bot = new Telegraf('5796064776:AAFiSIpxzjx8ytz1zBfu2xaVuHOP2kPedUM');


let linkCalendario = 'https://archivos.ujat.mx/2022/cal-escolares-2022-2023/Lienciatura.pdf'; 
let linkSistemas = 'https://www.ujat.mx/isc/24531';
let linkinformatica = 'https://archivos.ujat.mx/2018/DAIS/PE%20DAIS/IIA%202016/9.IIA_2016_TRAYECTORIA.pdf';

//comandos bot



bot.start( ctx => {
    

    ctx.telegram.sendMessage(ctx.chat.id, 'Hola Juchiman, Bienvenido. Utiliza  el botón help para mas información',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"HELP", callback_data:'help'}]
            ]
        },parse_mode:"HTML",
    }); 
});


bot.action(['help'], ctx =>{
    ctx.reply('Bienvenido, hay dos formas de acceder a las funciones 😉');
    ctx.reply('El botón PROCESOS desglosa todas las opciones mediante botones los cuales dan indicaciones de que realizar, cada botón viene seguido otros botones las cuales indican que acción realizan.',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"PROCESOS", callback_data:'procesos'}]
            ]
        },parse_mode:"HTML",
    });
    ctx.reply('El botón COMANDOS DIRECTOS muestra todos los comandos disponibles.',
        {
            reply_markup:{
                inline_keyboard:[
                    [{text:"COMANDOS DIRECTOS", callback_data:'comandos'}]
                ]
            },parse_mode:"HTML",
        });
    
});

bot.action(['comandos'],ctx =>{
    ctx.reply('Comandos que muestran como realizar cierto proceso')
    ctx.reply('El botón PRE-REINSCRIPCION adjunta el proceso y requisitos para realizar la Pre-Reinscripción.',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"PRE-REINSCRIPCION", callback_data:'prereinscripcion'}]
            ]
        },parse_mode:"HTML",
    });
    ctx.reply('El botón REINSCRIPCION adjunta el proceso y requisitos para realizar la la reinscripción.',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"REINSCRIPCION", callback_data:'reinscripcion'}]
            ]
        },parse_mode:"HTML",
    });
    ctx.reply('El botón CALENDARIO adjunta el Calendario del 2022 al 2023',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"CALENDARIO", callback_data:'calendario'}]
            ]
        },parse_mode:"HTML",
    });
    ctx.reply('El botón EXAMEN EXTRAORDINARIO adjunta el proceso y requisitos para realizar el Examen Extraordinario',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"EXAMEN EXTRAORDINARIO", callback_data:'examenextraordinario'}]
            ]
        },parse_mode:"HTML",
    });

    ctx.reply('El botón BAJA TEMPORAL adjunta el proceso y requisitos para realizar el proceso de baja temporal',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"BAJA TEMPORAL", callback_data:'BAJA TEMPORAL'}]
            ]
        },parse_mode:"HTML",
    });
    ctx.reply('El botón BAJA DE MATERIAS adjunta el proceso y requisitos para realizar el proceso para baja de materias',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"BAJA DE MATERIAS", callback_data:'bajamaterias'}]
            ]
        },parse_mode:"HTML",
    });
    ctx.reply('El botón E-CREDENCIAL adjunta el proceso y requisitos para obtener la credencial virtual',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"E-CREDENCIAL", callback_data:'ecredencial'}]
            ]
        },parse_mode:"HTML",
    });
    ctx.reply('El botón EXAMEN INSUFICIENCIA adjunta el proceso Y REQUISITOS para realizar el tramite de solicitud de Examen de Titutolo de insuficiencia',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"EXAMEN INSUFICIENCIA", callback_data:'exmaensuficiencia'}]
            ]
        },parse_mode:"HTML",
    });
    ctx.reply('El botón CONSTANCIA DE ESTUDIO adjunta el proceso Y REQUISITOS para solicitar constancia de estudio de forma virtual',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"CONSTANCIA DE ESTUDIO", callback_data:'constanciaestudio'}]
            ]
        },parse_mode:"HTML",
    });
    
    ctx.reply('El botón TUTORIALES muestra una secciones de botones que redirigen a los videos tutoriales subidos por la UJAT',{
        reply_markup:{
            inline_keyboard:[
                [{text:"TUTORIALES", callback_data:'tutoriales'}]
            ]
        },parse_mode:"HTML",
    });
});


bot.action('procesos', ctx => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Elige una opción para mostrar el link de los videos tutoriales',
    {
    reply_markup:{
        inline_keyboard:[
            [{text:"PROCESOS ADMINISTRATIVOS", callback_data:'administrativos' }],
            [{text:"DOCUMENTACION", callback_data:'documentacion' }],
            [{text:"VIDEOS TUTORIAL", callback_data:'tutoriales'},
        ]   
        ]          
    }, 
    parse_mode:"HTML",
});
});

bot.action(['administrativos'], ctx => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Los procesos a elegir son:',
    {
    reply_markup:{
        inline_keyboard:[
            [{text:"PRE-REINSCRIPCION", callback_data:'prereinscripcion'}],//2
            [{text:"REINSCRIPCION", callback_data:'reinscripcion' }],//2
            [{text:"EXAMEN EXTRAORDINARIO", callback_data:'examenextraordinario'}], //2
            [{text:"BAJA TEMPORAL", callback_data:'bajatemporal'}],//2
            [{text:"BAJA DE MATERIAS", callback_data:'bajamaterias'}],//2
            [{text:"E-CREDENCIAL", callback_data:'ecredencial'}],//2
            [{text:"EXAMEN INSUFICIENCIA",callback_data:'exmaensuficiencia' }],//2
            [{text:"CONSTANCIA DE ESTUDIO", callback_data:'constanciaestudio'}
           
        ]   
        ]          
    }, 
        parse_mode:"HTML",
});
});

bot.action('constanciaestudio', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Seleccione una opción',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"Requisitos", callback_data:'requisitosconst'}],
                [{text:"Proceso", callback_data:'procesoconst'}]
            ]
        },parse_mode:"HTML",
    }); 
});

bot.action('requisitosconst',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Ser estudiante inscrito o reinscrito.' 
    + '\n 2. No haber realizado baja temporal del ciclo o baja definitiva voluntaria.'
    + '\n 3. No tener más de 6 meses de haber egresado (sólo para constancias).');
});
bot.action('procesoconst',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Ingresa a www.sel.ujat.mx apartado Alumnos/ Constancia de Estudios/Nueva Solicitud.'
    + '\n 2. Elegir la  o las constancia de estudiante inscrito de acuerdo a sus necesidades.'
    + '\n 3. Guardar solicitud y realizar el pago en ventanilla o en transferencia.'
    + '\n 4. Esperar 12 horas del día hábil siguiente para validar el pago de ventanilla, en caso de transferencia validar de inmediato.'
    + '\n 5. Descargar la constancia ya que solo se permitirá un día hábil después de validar el pago.',
    {
        reply_markup:{
            inline_keyboard:[[{text:"🎦SOLICITUD CONSTANCIA DE ESTUDIO🎦", url:"https://youtu.be/oJs56WR0KRY"}]]     
        },parse_mode:"HTML",
    });    
});


bot.action('prereinscripcion', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Seleccione una opción',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"Requisitos", callback_data:'requisitosprereins'}],
                [{text:"Proceso", callback_data:'procesoprereins'}]
            ]
        },parse_mode:"HTML",
    }); 
});
//



bot.action('requisitosprereins',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Matrícula y contraseña de servicios escolares en línea.'
    + '\n 2. Trayectoria  si el avance en créditos del plan de estudios es menor al 45% deberá acudir con su tutor.'
    + '\n 3. No estar en situación de Baja Definitiva.'
    + '\n 4. Realizar la reinscripción en las fechas establecidas en el Calendario Escolar y de Actividades Vigente.');
});
bot.action('procesoprereins',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Ingresar con tu matrícula y contraseña a www.sel.ujat.mx y selecciona Pre-Reinscripción.'
    + '\n 2. Hacer click en el nombre de la asignatura para seleccionar grupos o eliminarlos (realiza este paso las veces que lo requieras hasta obtener el horario deseado con los créditos entre el mínimo y máximo de créditos del plan de estudios.'
    + '\n 3. Al seleccionar un grupo, el sistema realiza un filtrado con los casos siguientes: otros horarios de la misma asignatura, cruce de horarios, asignatura seriada o cuando el total de créditos de las asignaturas y grupos seleccionados rebasen el máximo de créditos indicados en el plan de estudios. Al eliminar grupos se quita el filtro. El filtro se repite en cada acción sobre los grupos.'
    + '\n 4. Podrá salir de los grupos aprobados, sin poner en riesgo la demanda calificada.'
    + '\n 5. Podrá eliminar por única vez el trámite realizado, sujeto a que no ponga en riesgo la demanda calificada. Para todos los grupos el número de alumnos debe ser mayor que la demanda.',
    {
        reply_markup:{
            inline_keyboard:[[{text:"🎦PRE-REINSCRIPCION🎦", url:"https://youtu.be/oJs56WR0KRY"}]]     
        },parse_mode:"HTML",
    });
});


bot.action('reinscripcion', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Seleccione una opción',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"Requisitos", callback_data:'requisitosreins'}],
                [{text:"Proceso", callback_data:'procesoreins'}]
            ]
        },parse_mode:"HTML",
    }); 
});

bot.action('requisitosreins',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Realizar la reinscripción en las fechas establecidas en el Calendario Escolar y de Actividades Vigente.'
    + '\n 2. Verificar las calificaciones obtenidas en el periodo escolar cursado, en www.ujat.mx/Alumnos/Acceso a los sistemas/Calificaciones en línea.'
    + '\n 3. Matrícula y contraseña de servicios escolares en línea.'
    + '\n 4. Trayectoria  si el avance en créditos del plan de estudios es menor al 45% deberá acudir con su tutor.'
    + '\n 5. No tener adeudo de documentos, material hemerobibliográfico y/o de laboratorio.'
    + '\n 6. No estar en situación de Baja Definitiva.');
});

bot.action('procesoreins',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Accede  a  www.ujat.mx en el módulo de Alumnos/ Acceso a los Sistemas/Reinscripción o ingresa a www.sel.ujat.mx apartado Alumnos/ Reinscripción.'
    + '\n 2. Elige asignaturas, grupos y horarios de clases, verifica y guarda la propuesta de horario.'
    + '\n 3. Si te corresponde pagar, imprime la referencia bancaria y realiza el pago en la fecha indicada, de lo contrario el banco no podrá efectuar el cobro.'
    + '\n 4. Ingresa al sistema al día hábil siguiente de haber realizado el pago después de las 12:00 hrs, para confirmar e imprimir tu Formato Universal de Servicios (Tira de Materias), que te identifica como estudiante reinscrito.'
    + '\n 5. Al no concluir este trámite de acuerdo a los tiempos establecidos en el Calendarios Escolar Vigente, quedarás como estudiante no reinscrito y causará baja temporal automáticamente.');
    ctx.telegram.sendMessage(ctx.chat.id, 'Nota: Para información sobre el costo de este servicio, puede llamar al teléfono (993) 3 58 15 00 Ext. 6026 (Extensión de Finanzas UJAT).',
    {
        reply_markup:{
            inline_keyboard:[[{text:"🎦REINSCRIPCION🎦", url:"https://youtu.be/oJs56WR0KRY"}]]     
        },parse_mode:"HTML",
    });
});


bot.action('exmaensuficiencia', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Seleccione una opción',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"Requisitos", callback_data:'requisitosexmin'}],
                [{text:"Procesos", callback_data:'procesosexmin'}]
            ]
        },parse_mode:"HTML",
    }); 
});



bot.action('requisitosexmin',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Solicitar por escrito ante la Dirección de la División Académica, la aplicación del examen a Titulo de Suficiencia, indicando nombre completo y matrícula del estudiante, así como el nombre y la clave correcta de la(s) asignatura(s) a presentar (máximo 2 asignaturas en cada ciclo largo).'
    + '\n 2. No tener adeudo de documentos, material hemerobibliográfico y/o de laboratorio. De lo contrario no podrán realizar su trámite.'
    + '\n 3. Sólo se concederán por única vez cuando no se acredite la asignatura en examen extraordinario.'
    + '\n 4. No estar en situación de Baja Definitiva.');
});
   
bot.action('procesosexmin',ctx=>{
  
    ctx.telegram.sendMessage(ctx.chat.id, '1. Presentarse en la Jefatura de Servicios Escolares para activar la solicitud de Exámenes a Título de Suficiencia, previa autorización de la Coordinación de Docencia.'
    + '\n 2. Realiza el pago correspondiente en la Caja de la División Académica.'
    + '\n 3. Termina el trámite en la Jefatura de Servicios Escolares con la validación e impresión de la solicitud.'
    + '\n 4. Al no concluir este trámite de acuerdo a los tiempos establecidos en el Calendarios Escolar Vigente, quedarás como solicitud, y no podrás presentar tus Exámenes a Título de Suficiencia.');

});


bot.action('ecredencial', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Seleccione una opción',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"Requisitos", callback_data:'requisitosecre'}],
                [{text:"Procesos", callback_data:'procesosecre'}]
            ]
        },parse_mode:"HTML",
    }); 
});



bot.action('requisitosecre',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Ser estudiante inscrito o reinscrito.'
    + '\n 2. Matrícula y contraseña de acceso a los servicios escolares en línea.'
    + '\n 3. En caso de extravío u olvido de la contraseña, debe acudir a la Jefatura de Servicios Escolares de su División Académica.');
});
bot.action('procesosecre',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Accede a www.sel.ujat.mx, da clic en el apartado alumno/e-Credencial y descarga.',
    {
        reply_markup:{
            inline_keyboard:[[{text:"🎦SOLICITUD E-CREDENCIAL🎦", url:"https://youtu.be/oJs56WR0KRY"}]]
        },parse_mode:"HTML",
    });
});





bot.action('bajamaterias', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Seleccione una opción',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"Requisitos", callback_data:'requistosbjamt'}],
                [{text:"Procesos", callback_data:'procesosbjamt'}]
            ]
        },parse_mode:"HTML",
    }); 
});


bot.action('requistosbjamt',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Solicitar baja temporal de la materia, en las fechas establecidas en el Calendario Escolar y de Actividades Vigente.'
    + '\n 2. Ser estudiante inscrito o reinscrito'
    + '\n 3. No  haber firmado carta compromiso.'
    + '\n 4. De acuerdo al plan de estudios en el que está inscrito, debe cumplir con el mínimo de créditos reinscritos.'
    + '\n 5. Se concederá la Baja Temporal por todo el ciclo escolar,  y para los casos de estudiantes.'
    + '\n 6. No tener adeudo de documentos, material hemerobibliográfico y/o de laboratorio.'
    + '\n 7. Matrícula y contraseña de servicios escolares en línea. Para su acceso en www.sel.ujat.mx');
})
bot.action('procesosbjamt',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Accede  a  www.ujat.mx en el módulo de Alumnos/ Acceso a los Sistemas/Baja Temporal o ingresa a www.sel.ujat.mx apartado Alumnos/ Baja Temporal.'
    + '\n 2. Elige asignaturas, verifica y guarda propuesta.'
    + '\n 3. Imprime el Comprobante de solicitud de Baja Temporal.'
    + '\n 4. Al no concluir este trámite de acuerdo a los tiempos establecidos en el Calendario Escolar y de Actividades vigente, quedará como solicitud y no procederá su Baja Temporal.',
    {
        reply_markup:{
            inline_keyboard:[[{text:"🎦Baja de Materia🎦", url:"https://youtu.be/oJs56WR0KRY"}]]
        },parse_mode:"HTML",
    });
})


bot.action('bajatemporal', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Seleccione una opción',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"Requisitos", callback_data:'requisitosbajt'}],
                [{text:"Proceso", callback_data:'procesobajt'}]
            ]
        },parse_mode:"HTML",
    }); 
});





bot.action('examenextraordinario', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Elige una opción ',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"Requisitos", callback_data:'requisitosex'}],
                [{text:"Proceso", callback_data:'procesoex'}]
            ]
        },parse_mode:"HTML",
    }); 
});

bot.action('requisitosex', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Solicitar examen extraordinario en las fechas establecidas en el calendario escolar y de actividades vigente.'
    + '\n 2. No tener adeudo de documentos, material bibliográfico y/o de laboratorio. De lo contrario no podrán realizar su trámite.'
    + '\n 3. Matrícula y contraseña de servicios escolares en línea. para su acceso en www.sel.ujat.mx');
});

bot.action('procesoex', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Accede  a  www.ujat.mx en el módulo de Alumnos/ Acceso a los Sistemas/Examen Extraordinario o ingresa a www.sel.ujat.mx apartado Alumnos/ Examen Extraordinario.'
    + '\n 2. Elige asignaturas, verifica y guarda propuesta.'
    + '\n 3. Si te corresponde pagar, imprime la referencia bancaria y realiza el pago en la fecha indicada, de lo contrario el banco no podrá efectuar el cobro.'
    + '\n 4. Ingresa al sistema al día hábil siguiente de haber realizado el pago después de las 12:00 hrs, para confirmar e imprimir tu Formato Universal de Servicios Comprobante de solicitud de examen extraordinario.'
    + '\n 5. Al no concluir este trámite de acuerdo a los tiempos establecidos en el Calendarios Escolar Vigente, quedarás como solicitud, y no podrás presentar tus exámenes extraordinarios.'
    + '\n 6. Nota: Para información sobre el costo de este servicio, puede llamar al teléfono   (993) 3 58 15 00 Ext. 6026.',
    {
        reply_markup:{
            inline_keyboard:[[{text:"🎦EXAMEN EXTRAORDINARIO🎦",  url: "https://youtu.be/oJs56WR0KRY"}]]
        },parse_mode:"HTML",
    });
});




bot.action('requisitosbajt',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Solicitar baja temporal, en las fechas establecidas en el Calendario Escolar y de Actividades Vigente.'
    + '\n 2. Ser estudiante inscrito o reinscrito.'
    + '\n 3. No  haber firmado carta compromiso. '
    + '\n 4. De acuerdo al plan de estudios en el que está inscrito, debe cumplir con el mínimo de créditos reinscritos.'
    + '\n 5. Se concederá la Baja Temporal por todo el ciclo escolar,  y para los casos de estudiantes con un avance en créditos del plan de estudios menor al 45%, debe realizar entrevista de baja temporal con su tutor.'
    + '\n 6. No tener adeudo de documentos, material hemerobibliográfico y/o de laboratorio..'
    + '\n 7. Matrícula y contraseña de servicios escolares en línea. para su acceso en www.sel.ujat.mx ');
});
bot.action('procesobajt',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '1. Accede  a  www.ujat.mx en el módulo de Alumnos/ Acceso a los Sistemas/Baja Temporal o ingresa a www.sel.ujat.mx apartado Alumnos/ Baja Temporal.'
    + '\n 2. Imprime el Comprobante de solicitud de Baja Temporal.'
    + '\n 3. Al no concluir este trámite de acuerdo a los tiempos establecidos en el Calendario Escolar y de Actividades vigente, quedará como solicitud y no procederá su Baja Temporal.',
    {
        reply_markup:{
            inline_keyboard:[[{text:"🎦BAJA TEMPORAL🎦", url:'https://youtu.be/oJs56WR0KRY'}]]
        },parse_mode:"HTML",
    });
});


bot.action(['documentacion'], ctx => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Elige el documento que deseas descargar.',
    {
    reply_markup:{
        inline_keyboard:[
            [{text:"CALENDARIO", callback_data:'calendario' }],
            [{text:"EVENTOS", callback_data:'eventos' }],
            [{text:"PLAN DE ESTUDIO", callback_data:'plandeestudio'}]
          
        ]}, 
        parse_mode:"HTML",
});
});
bot.action('plandeestudio', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Seleccione una opción',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"SISTEMAS COMPUACIONES", callback_data:'sistemas'}],
                [{text:"INFORMATICA ADMINSITRATIVA", callback_data:'informatica'}]
            ]
        },parse_mode:"HTML",
    }); 
});
bot.action('sistemas', ctx=>{
    ctx.reply(linkSistemas);
});
bot.action('informatica', ctx=>{
    ctx.reply(linkinformatica);
});

bot.action('calendario', ctx=>{
    ctx.reply(linkCalendario);
});


bot.action(['eventos'], ctx => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Elige una opción para mostrar más sobre el evento',
    {
    reply_markup:{
        inline_keyboard:[
            [{text:"Congreso Nacional Ingeniería Química", url:'https://congresos.ujat.mx/conaiq/' }],
            [{text:"Congreso Nacional Odontológico",  url: "https://ujat.mx/Eventos/31039"}],
            [{text:"10° Encuentro de Jóvenes Investigadores en Evaluación y Tecnología Ambienta", url:"https://congresos.ujat.mx/ejita/wp-content/uploads/2022/10/EJITA10_WEB-1.4_150-dpi-1536x1163.jpg"}],
            [{text:"Congreso Internacional Interdisciplinario de “Estudios de Género y Prevención de la Violencia", callback_data:'congreso'}
        ]   
        ]          
    }, 
        parse_mode:"HTML",
});

});



//se adjunta la función que despliega los enlaces a los videos en YouTube
bot.action(['tutoriales'], ctx => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Elige una opción para mostrar el link de los videos tutorial',
    {
    reply_markup:{
        inline_keyboard:[
            [{text:"🎦Baja Temporal🎦", url:'https://youtu.be/oJs56WR0KRY' }],
            [{text:"🎦Examen Extraordinario🎦",  url: "https://youtu.be/oJs56WR0KRY"}],
            [{text:"🎦Baja de Materia🎦", url:"https://youtu.be/oJs56WR0KRY"}],
            [{text:"🎦Solicitud e-Credencial🎦", url:"https://youtu.be/oJs56WR0KRY"}],
            [{text:"🎦Reinscripción🎦", url:"https://youtu.be/oJs56WR0KRY"}],
            [{text:"🎦Pre-Reinscripción🎦", url:"https://youtu.be/oJs56WR0KRY"}],
            [{text:"🎦Solicitud de Constancia de Estudios🎦", url:"https://youtu.be/oJs56WR0KRY"}
        ]   
        ]          
    }, 
        parse_mode:"HTML",
});
});


bot.launch();
/*
bot.action('', ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Seleccione una opción',
    {
        reply_markup:{
            inline_keyboard:[
                [{text:"", callback_data:''}],
                [{text:"", callback_data:'x'}]
            ]
        },parse_mode:"HTML",
    }); 
});
*/

/*
bot.action('',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, '');
})
*/