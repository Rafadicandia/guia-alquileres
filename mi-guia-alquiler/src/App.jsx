import React, { useState, useEffect, useRef } from 'react';

// --- Datos de los módulos (modulesData) ---
// Contenido completo de la guía Bien Seguro
const modulesData = [
    {
        id: 'bienvenida',
        title: 'Bienvenida Bien Seguro',
        content: (
            <>
                <h3>Bienvenido a la Aplicación Bien Seguro: Tu Guía para Alquilar en Uruguay</h3>
                <p>¡Hola! En <strong>Inmobiliaria Bien Seguro</strong>, estamos comprometidos a guiarte en cada paso del proceso de alquiler de tu nuevo hogar en Uruguay.</p>
                <p>Hemos creado esta completa aplicación a modo de manual de instrucciones para que tengas toda la información que necesitas al alcance de tu mano.</p>
            </>
        )
    },
    {
        id: 'encontrar_propiedad_bs',
        title: '1. Encontrar Propiedad (BS)',
        content: (
             <>
                <h3>Módulo 1: Encontrando tu Propiedad Ideal con Bien Seguro</h3>
                <p>En Bien Seguro, sabemos que la búsqueda de la propiedad perfecta es el inicio de todo. Para facilitarte esta tarea:</p>
                <ul>
                    <li>Publicamos nuestras propiedades en más de 10 portales web líderes en Uruguay, incluyendo Mercado Libre, InfoCasas, El Buscador de Casas y Más, Gallito Luis, Argenprop, Buscando Casa y CasasWeb.</li>
                    <li>Compartimos nuestras propiedades con una amplia red de colegas, clientes e inversores, ampliando las posibilidades de encontrar tu hogar ideal.</li>
                    <li>Nuestros avisos están diseñados para ofrecerte la mayor cantidad de información relevante. Encontrarás referencias claras, enlaces directos a más detalles y una galería de fotos completa.</li>
                </ul>
                <p>Si encuentras una propiedad que te interese en alguno de estos portales, no dudes en contactarnos directamente a través del correo electrónico indicado en el aviso. Nuestro equipo te responderá de manera rápida y profesional.</p>
            </>
        )
    },
    {
        id: 'introduccion_general',
        title: '2. Introducción General',
        content: (
            <>
                <h3>Módulo 2: Introducción General al Alquiler en Uruguay</h3>
                <p>El alquiler se ha convertido en una opción importante para muchos uruguayos, especialmente jóvenes que enfrentan dificultades para comprar una casa propia debido al desfase entre sus ingresos y los precios del mercado inmobiliario.</p>
                <p>El sistema de garantías de alquiler es esencial en Uruguay, proporcionando seguridad tanto al inquilino como al propietario.</p>
                <p>Sin embargo, para los inquilinos, los requisitos a menudo se consideran excesivos y trabas. La dificultad para acceder a una garantía es un obstáculo significativo.</p>
                <p>Alquilar a través de una inmobiliaria implica que el propietario también tiene responsabilidades.</p>
            </>
        )
    },
    {
        id: 'requisitos_garantias',
        title: '3. Requisitos y Garantías',
        content: (
             <>
                <h3>Módulo 3: Requisitos Esenciales y Tipos de Garantías</h3>
                <p>Para asegurar un proceso de alquiler ágil y eficiente, te solicitaremos la siguiente documentación:</p>
                <ul>
                    <li>
                        <h5>Documento de identidad vigente:</h5>
                        <p>Para ciudadanos uruguayos, la cédula de identidad es indispensable. Para extranjeros, se recomienda presentar el pasaporte junto con la residencia temporal o permanente en Uruguay, ya que algunas garantías pueden requerirlo.</p>
                    </li>
                    <li>
                        <h5>Comprobante de ingresos:</h5>
                        <p>Necesitamos acreditar tu capacidad de pago.</p>
                        <ul>
                            <li><strong>Empleados:</strong> Deberán presentar los recibos de sueldo de los últimos 3 meses. Generalmente, el ingreso mensual requerido es de al menos tres veces el valor del alquiler.</li>
                            <li><strong>Trabajadores independientes:</strong> Se solicitará una constancia de ingresos emitida y sellada por un escribano público, junto con las últimas declaraciones de impuestos (DGI) como respaldo adicional.</li>
                        </ul>
                    </li>
                    <li>
                        <h5>Libre de Clearing de Informes:</h5>
                         <p>Es fundamental que no figures en el <span className="glossary-term">Clearing de Informes</span> como deudor. Este registro contiene el historial financiero y los incumplimientos de pago.</p>
                    </li>
                    <li>
                        <h5>Presentación de una Garantía de Alquiler:</h5>
                         <p>En Uruguay, es necesario contar con una garantía que respalde el cumplimiento del contrato. Aceptamos diversas opciones:</p>
                    </li>
                </ul>

                <h4 className="mt-6">Tipos de Garantías Aceptadas</h4>
                 <ul>
                    <li>
                        <h5>Depósito en el Banco Hipotecario del Uruguay (BHU):</h5>
                        <p>Consiste en un depósito en <span className="glossary-term">Unidades Indexadas (UI)</span> que puede ser de hasta cinco meses de alquiler para vivienda y diez para otros destinos. El BHU cobra una comisión por la constitución. La Ley 14.219 establece que este depósito debe completarse en caso de aumento del alquiler, y los arrendatarios (inquilinos) pueden convertir la garantía a <span className="glossary-term">Obligaciones Hipotecarias Reajustables (OHR)</span> en cuotas.</p>
                    </li>
                    <li>
                        <h5>ANDA (Asociación Nacional de Afiliados):</h5>
                        <p>Es un sistema mutual que actúa como garante para sus socios activos. Requiere ser socio activo con una antigüedad mínima, presentar documentación (cédula, comprobante de ingresos) y tener un aval financiero según ingresos. Las cuotas suelen ser más bajas y ofrece soporte legal al inquilino. Cobra una prima mensual tanto al inquilino como al propietario.</p>
                    </li>
                    <li>
                        <h5>Contaduría General de la Nación (CGN):</h5>
                        <p>Una garantía estatal para trabajadores públicos y privados con ingresos demostrables. Cubre un monto de alquiler de hasta el 50% de los ingresos nominales del inquilino. Cubre completamente al propietario. No tiene costos mensuales directos para el inquilino, pero los procesos pueden ser más burocráticos y lentos. El Fondo de Garantía de Alquiler del MVOT ofrece una garantía similar en convenio con la CGN y la ANV para quienes no poseen otra propiedad. Funciona como agente de retención del alquiler del sueldo del inquilino.</p>
                    </li>
                    <li>
                        <h5>Seguro de Alquiler (Aseguradoras):</h5>
                        <p>Ofrecido por aseguradoras privadas como Porto Seguro. Funcionan como un seguro que cubre al propietario por impago. Requiere el pago de una póliza mensual por parte del inquilino. El importe máximo a garantizar será de hasta el 30% del ingreso líquido del solicitante, y se pueden incluir hasta 3 personas para completar los requisitos de ingresos. Ofrecen procesos más rápidos y son más flexibles para quienes no tienen mucha antigüedad laboral.</p>
                    </li>
                    <li>
                        <h5>Garantía de Propiedad:</h5>
                        <p>Un tercero ofrece una propiedad como garantía. Se requiere documentación que acredite que la propiedad está libre de gravámenes y que el garante es el dueño. Si la propiedad se vende durante el alquiler, se debe presentar otra garantía.</p>
                    </li>
                     <li>
                        <h5>Fianza o garantía personal:</h5>
                        <p>Un tercero manifiesta solvencia. La Ley 14.219 regula esta figura, enfocándose en la solvencia del garante y prohibiendo la hipoteca directa de una propiedad como garantía. Se permite sustituir la fianza personal por un depósito en OHR si no hay acción judicial iniciada.</p>
                    </li>
                    <li>
                        <h5>Ley de Urgente Consideración (LUC) - Alquiler sin Garantía Tradicional:</h5>
                        <p>Para alquileres menores a 100 <span className="glossary-term">Unidades Reajustables (UR)</span>, la <span className="glossary-term">LUC</span> estableció un mecanismo que permite un acuerdo más flexible sobre la garantía entre inquilino y propietario, pudiendo incluso prescindirse de ella. El contrato debe estar acorde a la LUC.</p>
                        <p>A cambio, el arrendador se beneficia de un proceso de desalojo más abreviado en caso de incumplimiento (intimación por telegrama, plazos reducidos).</p>
                        <p>El inquilino pierde el beneficio de un año por buen pagador.</p>
                        <p>Ofrece mayor flexibilidad y menos burocracia para el inquilino.</p>
                        <p>Podría no garantizar al propietario la misma seguridad que otras opciones.</p>
                        <p>Existe incertidumbre sobre su adopción generalizada.</p>
                    </li>
                </ul>
                 <p className="mt-4">En algunos casos, podríamos solicitar referencias personales o comerciales.</p>
                 <p>Podríamos pedir una constancia de domicilio.</p>
            </>
        )
    },
    {
        id: 'reserva_bs',
        title: '4. Proceso de Reserva (BS)',
         content: (
             <>
                <h3>Módulo 4: Proceso de Reserva de tu Propiedad con Bien Seguro</h3>
                <p>Una vez que hayas encontrado la propiedad que deseas alquilar y hayamos acordado el precio, podrás reservarla mediante un depósito que generalmente equivale al 50% del valor de un mes de alquiler.</p>
                <p>Este depósito (seña) se mantendrá en custodia por Bien Seguro hasta el momento de la firma del contrato.</p>
                <p>Simultáneamente, te proporcionaremos un documento donde se detallarán las condiciones del contrato de alquiler.</p>
            </>
        )
    },
    {
        id: 'formalizacion_bs',
        title: '5. Formalización Contrato (BS)',
         content: (
             <>
                <h3>Módulo 5: La Formalización del Contrato de Alquiler con Bien Seguro</h3>
                <p>Una vez que tu garantía y toda la documentación sean revisadas y aceptadas, coordinaremos la firma del contrato de alquiler y del inventario detallado de la propiedad.</p>
                <p>El contrato establecerá claramente los plazos, el monto del alquiler y todas las condiciones acordadas. Es importante que lo leas detenidamente y aclares cualquier duda.</p>
                <p>Recomendamos que el contrato incluya una cláusula de resolución anticipada para establecer las condiciones en caso de que necesites finalizar el contrato antes del plazo acordado.</p>
                <p>En el momento de la firma, deberás presentar la garantía acordada y realizar el primer pago del alquiler, así como los gastos iniciales asociados (ver Módulo 6).</p>
                <p>Te informaremos sobre la importancia de la inscripción del contrato en el Registro de la Propiedad; aunque no siempre es obligatorio, ofrece mayor seguridad jurídica.</p>
                <p>La Ley 14.219 [ver Módulo 9] establece normativas específicas para los contratos de arrendamiento, diferenciando según el año de construcción del inmueble.</p>
            </>
        )
    },
    {
        id: 'costos_iniciales',
        title: '6. Costos Iniciales',
        content: (
             <>
                 <h3>Módulo 6: Entendiendo los Costos Iniciales</h3>
                <p>Al momento de firmar el contrato, es importante que tengas en cuenta los siguientes costos iniciales (generalmente a cargo del inquilino):</p>
                <ul>
                    <li>
                        <h5>Honorarios de la inmobiliaria (Bien Seguro):</h5>
                        <p>Equivalentes a un mes de alquiler más el <span className="glossary-term">IVA</span>. Este monto cubre la redacción y revisión del contrato, la gestión de la firma, la realización del inventario detallado y el trámite de la garantía.</p>
                        <p>La comisión por administración a cargo del inquilino no puede exceder el 1% del monto total del contrato y puede abonarse hasta en seis cuotas mensuales consecutivas junto con el alquiler.</p>
                        <p>Es importante tener en cuenta que los honorarios inmobiliarios generalmente se abonan en efectivo.</p>
                    </li>
                    <li>
                        <h5>Posible mes de alquiler adelantado:</h5>
                         <p>Aunque en Uruguay los alquileres suelen pagarse a mes vencido, algunos contratos pueden requerir un mes adelantado.</p>
                    </li>
                    <li>
                        <h5>Aplicación del Depósito de Reserva (Seña):</h5>
                         <p>El depósito de reserva (seña) que realizaste inicialmente (ver Módulo 4) se aplicará a la liquidación de estos costos iniciales.</p>
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 'gastos_mensuales',
        title: '7. Gastos Mensuales',
         content: (
             <>
                <h3>Módulo 7: Gastos Mensuales Adicionales a Considerar</h3>
                <p>Además del pago mensual del alquiler acordado, como inquilino, serás responsable de los siguientes gastos de forma continua:</p>
                <ul>
                    <li><strong>Gastos comunes:</strong> Cubren el mantenimiento general del edificio, la limpieza de las áreas comunes y otros servicios administrados por la administración del inmueble.</li>
                    <li><strong>Tributos domiciliarios:</strong> Son los impuestos bimestrales cobrados por la Intendencia de Montevideo, conocidos popularmente como los "impuestos de puerta".</li>
                    <li><strong>Pago del alquiler:</strong> Se realizará mensualmente a través del banco según lo estipulado en el contrato.</li>
                    <li><strong>Servicios:</strong> Consumo de <span className="glossary-term">UTE</span> (luz), <span className="glossary-term">OSE</span> (agua, si corresponde), gas, <span className="glossary-term">ANTEL</span> (internet/teléfono), etc.</li>
                    <li><strong>Gastos adicionales para casas:</strong> En el caso de alquilar una casa, deberás considerar la tarifa de saneamiento, los tributos municipales y el servicio de agua potable proporcionado por <span className="glossary-term">OSE</span>.</li>
                </ul>
                <p>Es fundamental saber que el pago de los consumos, gastos comunes u otros servicios accesorios a la locación es tu responsabilidad (inquilino). Si el propietario (arrendador) abona estos gastos por dos o más meses, la deuda se considerará indivisible con el alquiler.</p>
            </>
        )
    },
    {
        id: 'rol_inmobiliarias',
        title: '8. Rol General Inmobiliarias',
         content: (
             <>
                <h3>Módulo 8: El Rol General de las Inmobiliarias</h3>
                <p>Las inmobiliarias juegan un papel central en el proceso de alquiler.</p>
                <ul>
                    <li>Ayudan en la búsqueda y selección del inmueble (servicio al inquilino).</li>
                    <li>Gestionan la reserva de la propiedad (servicio a ambos).</li>
                    <li>Solicitan y verifican la documentación del inquilino y la garantía (servicio al arrendador).</li>
                    <li>Redactan y revisan el contrato de alquiler (servicio a ambos).</li>
                    <li>Realizan un inventario del inmueble (servicio a ambos).</li>
                    <li>Gestionan el trámite de la garantía de alquiler (servicio a ambos).</li>
                    <li>Actúan como intermediarios entre el inquilino y el propietario (servicio a ambos).</li>
                </ul>
                <p>Se recomienda asegurarse de que la inmobiliaria esté registrada en el Ministerio de Turismo, especialmente para alquileres turísticos, para evitar fraudes (ver Módulo 13).</p>
                <p>Los administradores de bienes inmuebles obligan a los propietarios en los actos que celebren con los inquilinos. Se presume que representan a los dueños en gestiones administrativas o judiciales. La exhibición de recibos de pago puede probar su calidad de administrador.</p>
            </>
        )
    },
     {
        id: 'marco_legal',
        title: '9. Marco Legal',
         content: (
             <>
                <h3>Módulo 9: Marco Legal Relevante</h3>
                <p>La <strong>Ley 14.219</strong> es fundamental, estableciendo el régimen de garantías, los procedimientos de desalojo y normativas específicas para los contratos de arrendamiento (diferenciando según año de construcción). El Capítulo VII está dedicado a las garantías. Esta ley limita el monto de la garantía y regula el depósito en el BHU y la fianza personal.</p>
                <p>La <strong><span className="glossary-term">Ley de Urgente Consideración (LUC)</span></strong> introdujo el sistema de alquiler sin garantía tradicional (para alquileres &lt; 100 UR) con un proceso de desalojo más abreviado (beneficio arrendador).</p>
                <p>La <strong>Ley N°20.380</strong> y el <strong>Decreto N°385/994</strong> regulan la inscripción y garantía de operadores inmobiliarios turísticos en ciertos departamentos.</p>
            </>
        )
    },
    {
        id: 'rescision',
        title: '10. Rescisión de Contrato',
         content: (
             <>
                 <h3>Módulo 10: Proceso y Consideraciones para la Rescisión del Contrato</h3>
                <p>Rescindir un contrato de alquiler antes de su finalización puede ser un proceso complejo y generalmente implica ciertas condiciones.</p>
                <p>En la mayoría de los casos, la rescisión anticipada requerirá una negociación con el propietario o la inmobiliaria y podría acarrear el pago de una multa estipulada en el contrato o la pérdida de la garantía.</p>
                <p>Sin embargo, si surgen problemas graves en la propiedad que no eran evidentes al inicio del contrato (como humedad severa o problemas estructurales), podrías tener derecho a rescindir el contrato. En estos casos, podría solicitarse una inspección de la garantía (por ejemplo, si es <span className="glossary-term">CGN</span>).</p>
                <p>Otra alternativa que podrías explorar es la posibilidad de transferir el contrato a otro inquilino que cumpla con los requisitos, siempre con la aprobación del propietario.</p>
                <p>Te recomendamos leer detenidamente la cláusula de resolución anticipada que pueda estar incluida en el contrato.</p>
                 <p>Bajo el sistema de la <span className="glossary-term">LUC</span> sin garantía, algunos inquilinos ven la posibilidad de simplemente dejar de pagar e irse, aunque esto podría tener consecuencias legales como un proceso de desalojo (acción arrendador) y embargo por alquileres impagos (acción arrendador).</p>
                <p>En cualquier situación de rescisión, te aconsejamos comunicarte con nosotros (Bien Seguro) para analizar las opciones disponibles y buscar la mejor solución posible, intentando siempre llegar a un acuerdo justo con el propietario.</p>
            </>
        )
    },
    {
        id: 'desalojos',
        title: '11. Proceso de Desalojo',
         content: (
             <>
                <h3>Módulo 11: Información Importante sobre Desalojos</h3>
                <p>La Ley 14.219 establece las causales y los procedimientos para el desalojo de una propiedad. Durante la vigencia de los plazos legales del arrendamiento, no se puede iniciar una acción de desalojo, excepto en casos específicos.</p>
                <h4>Causales de Desalojo</h4>
                <ul>
                    <li>Incumplimiento del pago del alquiler.</li>
                    <li>Necesidad del propietario de ocupar la vivienda para sí mismo o para familiares directos.</li>
                    <li>Necesidad de realizar reconstrucciones o demoliciones en la propiedad.</li>
                    <li>Estado de ruina del inmueble.</li>
                    <li>Vencimiento del plazo contractual.</li>
                </ul>
                 <h4>Consideraciones para Inquilinos</h4>
                 <ul>
                     <li>Existe la figura del "año de gracia" que, en ciertos casos y bajo ciertas normativas (principalmente para fincas construidas antes del 2 de junio de 1968), otorga un plazo adicional al inquilino en caso de desalojo por ciertas causales.</li>
                     <li>Si estás al día con tus pagos (buen pagador), podrías tener plazos más amplios para la desocupación en caso de desalojo por ciertas causales.</li>
                     <li>En caso de entrega voluntaria de la propiedad, debes comunicarlo al Juzgado. Si no lo haces, el propietario puede solicitar una comprobación judicial.</li>
                     <li>Si te encuentras en alguna de las situaciones de vulnerabilidad detalladas en la Ley 14.219 (ej. ahorrista BHU con compromiso de compraventa, adjudicatario de vivienda pública en construcción), el lanzamiento (ejecución del desalojo) podría suspenderse.</li>
                     <li>La ley también protege a los inquilinos ante la supresión o reducción arbitraria de los servicios accesorios a la locación.</li>
                 </ul>
                 <h4>Procedimiento General</h4>
                 <ul>
                     <li>El procedimiento de desalojo se lleva a cabo ante los Juzgados de Paz del lugar donde se ubica el inmueble.</li>
                     <li>Es un proceso por escrito que requiere la presentación del contrato de arrendamiento.</li>
                     <li>Durante un juicio de desalojo, cualquiera de las partes puede solicitar una inspección judicial del inmueble para verificar su estado.</li>
                 </ul>
            </>
        )
    },
    {
        id: 'consejos_inquilinos',
        title: '12. Consejos para Inquilinos',
         content: (
             <>
                <h3>Módulo 12: Consejos para Inquilinos</h3>
                <ul>
                    <li>Considerar los ingresos disponibles, liquidez inicial, urgencia y flexibilidad al elegir una garantía.</li>
                    <li>Estar preparado financieramente para los costos iniciales.</li>
                    <li>Siempre consultar y preguntar a la inmobiliaria o al propietario sobre cualquier duda.</li>
                    <li>Investigar sobre las diferentes opciones de garantía.</li>
                    <li>Leer detenidamente el contrato de alquiler, incluyendo cláusulas de resolución anticipada si es posible.</li>
                    <li>Guardar copia de toda la documentación y comunicaciones.</li>
                </ul>
            </>
        )
    },
    {
        id: 'fraudes',
        title: '13. Fraudes (Alq. Turísticos)',
         content: (
             <>
                <h3>Módulo 13: Precauciones Contra Fraudes (Especialmente Alquileres Turísticos)</h3>
                <p>Si estás interesado en alquileres temporales o turísticos, te recomendamos ser especialmente cauteloso con anuncios que encuentres en redes sociales o plataformas no verificadas que ofrezcan propiedades a precios demasiado atractivos.</p>
                <p>Antes de realizar cualquier pago o acuerdo, es fundamental que te asegures de que la inmobiliaria o el operador esté debidamente registrado en el Ministerio de Turismo.</p>
                <p>Esta simple verificación puede evitarte ser víctima de estafas y garantizarte unas vacaciones sin contratiempos.</p>
                <p>Recuerda que, de acuerdo con la Ley N°20.380, todos los operadores inmobiliarios que realicen actividades en los departamentos de Maldonado, Rocha, Canelones y Colonia deben estar inscriptos en el Ministerio de Turismo y constituir una garantía conforme al Decreto N°385/994.</p>
                <p>Prioriza siempre la transparencia y la confianza en tus interacciones.</p>
            </>
        )
    },
    {
        id: 'glosario',
        title: '14. Glosario',
        content: (
            <>
                <h3>Módulo 14: Glosario de Términos Útiles</h3>
                <ul>
                    <li><strong className="glossary-term">ANDA:</strong> Asociación Nacional de Afiliados. Mutual que ofrece garantías de alquiler.</li>
                    <li><strong className="glossary-term">ANTEL:</strong> Empresa estatal de telecomunicaciones (internet, telefonía).</li>
                    <li><strong className="glossary-term">BHU:</strong> Banco Hipotecario del Uruguay. Banco estatal que gestiona depósitos en garantía y otorga préstamos para vivienda.</li>
                    <li><strong className="glossary-term">CGN:</strong> Contaduría General de la Nación. Organismo estatal que ofrece garantías de alquiler.</li>
                    <li><strong className="glossary-term">Clearing de Informes:</strong> Base de datos sobre el historial crediticio de las personas en Uruguay.</li>
                    <li><strong className="glossary-term">IVA:</strong> Impuesto al Valor Agregado.</li>
                    <li><strong className="glossary-term">LUC:</strong> Ley de Urgente Consideración. Ley que introdujo modificaciones en diversos ámbitos, incluyendo garantías de alquiler.</li>
                    <li><strong className="glossary-term">OHR:</strong> Obligaciones Hipotecarias Reajustables. Títulos de deuda emitidos por el BHU.</li>
                    <li><strong className="glossary-term">OSE:</strong> Obras Sanitarias del Estado. Empresa estatal proveedora de agua potable y saneamiento.</li>
                    <li><strong className="glossary-term">UI:</strong> Unidad Indexada. Unidad de valor utilizada para actualizar precios y salarios.</li>
                    <li><strong className="glossary-term">UR:</strong> Unidad Reajustable. Unidad de valor utilizada para determinar montos en contratos de alquiler.</li>
                    <li><strong className="glossary-term">UTE:</strong> Administración Nacional de Usinas y Trasmisiones Eléctricas. Empresa estatal proveedora de energía eléctrica.</li>
                </ul>
            </>
        )
    },
    {
        id: 'recursos',
        title: '15. Recursos Útiles',
         content: (
            <>
                <h3>Módulo 15: Recursos Útiles</h3>
                <ul>
                    <li>Indicadores de Mercado de Alquileres y Compraventa del INE (Instituto Nacional de Estadística).</li>
                    <li>Preguntas Frecuentes sobre Garantía de Alquileres del MEF (Ministerio de Economía y Finanzas).</li>
                    <li>Servicio de asesoramiento sobre derechos habitacionales de la Intendencia de Montevideo (Oficina de Rehabilitación Urbana, asesoramiento gratuito miércoles y viernes).</li>
                    <li>Portales inmobiliarios para buscar propiedades (ej. InfoCasas, Mercado Libre, Gallito Luis, etc.).</li>
                    <li>Sitio web del Ministerio de Turismo (para verificar registro de operadores turísticos).</li>
                     <li>Sitio web de <span className="glossary-term">BHU</span>, <span className="glossary-term">ANDA</span>, <span className="glossary-term">CGN</span>, Aseguradoras (para información sobre garantías).</li>
                </ul>
            </>
        )
    },
    {
        id: 'apoyo_bs',
        title: '16. Apoyo Bien Seguro',
         content: (
             <>
                 <h3>Módulo 16: Estamos Aquí para Brindarte Apoyo</h3>
                <p>En <strong>Inmobiliaria Bien Seguro</strong>, nuestro principal objetivo es ofrecerte un servicio basado en la transparencia, la confianza y la profesionalidad.</p>
                <p>No dudes en consultarnos y preguntar siempre cualquier duda que te surja durante el proceso de alquiler. Estamos aquí para ayudarte a encontrar tu hogar ideal en Uruguay.</p>
                <p>Si te encuentras en una situación de vulnerabilidad de derechos habitacionales, también puedes contactar con el Servicio de asesoramiento sobre derechos habitacionales de la Intendencia de Montevideo mencionado en Recursos Útiles.</p>
                <p><strong>¡Gracias por elegir Inmobiliaria Bien Seguro! Esperamos poder ayudarte a encontrar tu próximo hogar.</strong></p>
            </>
        )
    }
];


// Componente Sidebar
const Sidebar = ({ modules, activeSection, setActiveSection }) => {
    return (
        <aside id="sidebar" className="w-full md:w-64 bg-white p-4 border-r border-gray-200 overflow-y-auto md:h-screen">
            <h2 className="text-xl font-bold mb-6 text-blue-900">Guía Bien Seguro</h2>
            <nav>
                <ul className="space-y-1">
                    {modules.map((module) => (
                        <li key={module.id}>
                            <a
                                href={`#${module.id}`}
                                className={`nav-link block py-2 px-3 rounded hover:bg-gray-100 transition duration-150 ease-in-out ${
                                    activeSection === module.id ? 'active' : ''
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveSection(module.id);
                                    window.location.hash = `#${module.id}`;
                                }}
                            >
                                {module.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

// Componente Content
const Content = ({ module }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [module]);

    if (!module) {
        return null;
    }
    return (
        <main id="content" ref={contentRef} className="flex-1 p-6 md:p-8 overflow-y-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Applying the class here ensures CSS rules target the content */}
                <div className="content-section active">
                   {module.content}
                </div>
            </div>
        </main>
    );
};

// Componente Principal App
function App() {
    const [activeSection, setActiveSection] = useState('bienvenida');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            const isValidModule = modulesData.some(module => module.id === hash);
            setActiveSection(isValidModule ? hash : 'bienvenida');
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Initial check

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const activeModule = modulesData.find(module => module.id === activeSection);

    return (
        // Main container
        <div className="bg-gray-100">
            {/* El bloque de comentario grande ha sido eliminado */}
            <div id="app-container" className="flex flex-col md:flex-row md:h-screen">
                <Sidebar
                    modules={modulesData}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <Content module={activeModule} />
            </div>
        </div>
    );
}

export default App; // Export the main component
