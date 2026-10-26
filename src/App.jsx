import React, { useState, useEffect, useRef } from 'react';

// --- Datos de los módulos (modulesData) ---
// Contenido completo de la guía Bien Seguro
const modulesData = [
    {
        id: 'bienvenida',
        title: 'Bienvenida Bien Seguro',
        content: (
            <>
                <div className="welcome-header">
                    <h2>Bienvenido a Bien Seguro</h2>
                    <p className="subtitle">Tu Guia para Alquilar en Uruguay</p>
                </div>
                <div className="info-card highlight">
                    <p>En <strong>Inmobiliaria Bien Seguro</strong>, estamos comprometidos a guiarte en cada paso del proceso de alquiler de tu nuevo hogar en Uruguay.</p>
                </div>
                <div className="info-card">
                    <p>Hemos creado esta completa aplicacion a modo de manual de instrucciones para que tengas toda la informacion que necesitas al alcance de tu mano.</p>
                </div>
                <div className="steps-preview">
                    <h4>Las etapas de tu proceso de alquiler</h4>
                    <div className="steps-grid">
                        <div className="step-badge">1. Busqueda</div>
                        <div className="step-badge">2. Documentacion</div>
                        <div className="step-badge">3. Reserva</div>
                        <div className="step-badge">4. Firma</div>
                        <div className="step-badge">5. Durante el alquiler</div>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'encontrar_propiedad_bs',
        title: 'Encontrar Propiedad',
        stage: 'Etapa 1: Búsqueda',
        stageColor: '#10b981',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#10b981'}}>Etapa 1</span>
                    <h2>Encontrando tu Propiedad Ideal con Bien Seguro</h2>
                </div>
                
                <div className="info-card">
                    <p>En Bien Seguro, sabemos que la búsqueda de la propiedad perfecta es el inicio de todo. Para facilitarte esta tarea:</p>
                </div>

                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon">*</div>
                        <h4>Multiples Portales</h4>
                        <p>Publicamos nuestras propiedades en mas de 10 portales web lideres en Uruguay</p>
                        <ul className="portal-list">
                            <li>Mercado Libre</li>
                            <li>InfoCasas</li>
                            <li>Gallito Luis</li>
                            <li>Inmona</li>
                            <li>Mi Lugar</li>
                            <li>Tiktok</li>
                            <li>Instagram</li>
                            
                        </ul>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">*</div>
                        <h4>Red de Contactos</h4>
                        <p>Compartimos nuestras propiedades con una amplia red de colegas, clientes e inversores</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">*</div>
                        <h4>Informacion Completa</h4>
                        <p>Nuestros avisos incluyen referencias claras, enlaces directos y galeria de fotos completa</p>
                    </div>
                </div>

                <div className="info-card tip">
                    <h4>Consejo</h4>
                    <p>Si encuentras una propiedad que te interese en alguno de estos portales, no dudes en contactarnos directamente a traves del correo electronico indicado en el aviso. Nuestro equipo te respondera de manera rapida y profesional.</p>
                </div>
            </>
        )
    },
    {
        id: 'introduccion_general',
        title: 'Introducción General',
        stage: 'Información General',
        stageColor: '#6366f1',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#6366f1'}}>Información</span>
                    <h2>Introducción General al Alquiler en Uruguay</h2>
                </div>

                <div className="info-card">
                    <p>El alquiler se ha convertido en una opción importante para muchos uruguayos, especialmente jóvenes que enfrentan dificultades para comprar una casa propia debido al desfase entre sus ingresos y los precios del mercado inmobiliario.</p>
                </div>

                <div className="key-points">
                    <div className="key-point">
                        <span className="key-icon">*</span>
                        <div>
                            <h4>Sistema de Garantias</h4>
                            <p>Es esencial en Uruguay, proporcionando seguridad tanto al inquilino como al propietario.</p>
                        </div>
                    </div>
                    <div className="key-point">
                        <span className="key-icon">*</span>
                        <div>
                            <h4>Desafios para Inquilinos</h4>
                            <p>Para los inquilinos, los requisitos a menudo se consideran excesivos y trabas. La dificultad para acceder a una garantia es un obstaculo significativo.</p>
                        </div>
                    </div>
                    <div className="key-point">
                        <span className="key-icon">*</span>
                        <div>
                            <h4>Rol de las Inmobiliarias</h4>
                            <p>Alquilar a traves de una inmobiliaria implica que el propietario tambien tiene responsabilidades.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'requisitos_garantias',
        title: 'Requisitos y Garantías',
        stage: 'Etapa 2: Documentación',
        stageColor: '#f59e0b',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#f59e0b'}}>Etapa 2</span>
                    <h2>Requisitos Esenciales y Tipos de Garantías</h2>
                </div>

                <div className="info-card">
                    <h3>Documentacion Requerida</h3>
                    <p>Para asegurar un proceso de alquiler agil y eficiente, te solicitaremos la siguiente documentacion:</p>
                </div>

                <div className="doc-section">
                    <div className="doc-card">
                        <div className="doc-icon">*</div>
                        <h4>Documento de identidad vigente</h4>
                        <ul>
                            <li><strong>Ciudadanos uruguayos:</strong> Cedula de identidad</li>
                            <li><strong>Extranjeros:</strong> Pasaporte + residencia temporal o permanente</li>
                        </ul>
                    </div>
                    <div className="doc-card">
                        <div className="doc-icon">*</div>
                        <h4>Comprobante de ingresos</h4>
                        <div className="doc-sub">
                            <p><strong>Empleados:</strong> Recibos de sueldo de los ultimos 3 meses. El ingreso mensual debe ser al menos 3 veces el valor del alquiler.</p>
                            <p><strong>Trabajadores independientes:</strong> Constancia de ingresos emitida por escribano publico + ultimas declaraciones de impuestos (DGI).</p>
                        </div>
                    </div>
                    <div className="doc-card">
                        <div className="doc-icon">*</div>
                        <h4>Clearing de Informes</h4>
                        <p>Es fundamental que no figure en el Clearing de Informes como deudor. Este registro contiene el historial financiero y los incumplimientos de pago.</p>
                    </div>
                </div>

                <div className="info-card highlight">
                    <h3>Tipos de Garantias Aceptadas</h3>
                    <p>En Uruguay, es necesario contar con una garantia que respalde el cumplimiento del contrato. A continuacion las opciones disponibles:</p>
                </div>

                <div className="guarantee-grid">
                    
                    <div className="guarantee-card special">
                        <div className="guarantee-header">
                            <span className="guarantee-icon">*</span>
                            <h4>ANDA</h4>
                        </div>
                        <p>Sistema mutual que actua como garante para sus socios activos. Requiere ser socio activo con antiguedad minima.</p>
                        <div className="guarantee-details">
                            <span>Mutual</span>
                            <span>Cuotas bajas</span>
                            <span>Aceptada por Bien Seguro</span>
                        </div>
                    </div>
                    <div className="guarantee-card special">
                        <div className="guarantee-header">
                            <span className="guarantee-icon">*</span>
                            <h4>CGN</h4>
                        </div>
                        <p>Garantia estatal para trabajadores publicos y privados. Cubre hasta el 50% de los ingresos nominales.</p>
                        <div className="guarantee-details">
                            <span>Estatal</span>
                            <span>Sin costo mensual</span>
                            <span>Aceptada por Bien Seguro</span>
                        </div>
                    </div>
                    <div className="guarantee-card special">
                        <div className="guarantee-header">
                            <span className="guarantee-icon">*</span>
                            <h4>Seguro de Alquiler</h4>
                        </div>
                        <p>Ofrecido por aseguradoras privadas como Porto Seguro. Funciona como seguro que cubre al propietario por impago.</p>
                        <div className="guarantee-details">
                            <span>Privado</span>
                            <span>Proceso rapido</span>
                            <span>Aceptada por Bien Seguro</span>
                            <a href='https://api.whatsapp.com/send?phone=+59894500474&text=Hola!%20Quiero%20hacer%20una%20consulta!' target="_blank" rel="noopener noreferrer">Contratalo con nosotros</a>
                        </div>
                    </div>
                    <div className="guarantee-card">
                        <div className="guarantee-header">
                            <span className="guarantee-icon">*</span>
                            <h4>Deposito en BHU</h4>
                        </div>
                        <p>Deposito en Unidades Indexadas (UI) de hasta 5 meses de alquiler para vivienda. El BHU cobra una comision por la constitucion.</p>
                        <div className="guarantee-details">
                            <span>UI Indexado</span>
                            <span>Hasta 5 meses</span>
                            <span>No aceptada por Bien Seguro</span>
                        </div>
                    </div>
                    <div className="guarantee-card">
                        <div className="guarantee-header">
                            <span className="guarantee-icon">*</span>
                            <h4>Garantia de Propiedad</h4>
                        </div>
                        <p>Un tercero ofrece una propiedad como garantia. Se requiere documentacion que acredite que esta libre de gravamenes.</p>
                        <div className="guarantee-details">
                            <span>Propiedad</span>
                            <span>Requiere documentacion</span>
                            <span>No aceptada por Bien Seguro</span>
                        </div>
                    </div>
                    <div className="guarantee-card">
                        <div className="guarantee-header">
                            <span className="guarantee-icon">*</span>
                            <h4>Fianza Personal</h4>
                        </div>
                        <p>Un tercero manifiesta solvencia. La Ley 14.219 regula esta figura, enfocandose en la solvencia del garante.</p>
                        <div className="guarantee-details">
                            <span>Personal</span>
                            <span>Aval financiero</span>
                            <span>No aceptada por Bien Seguro</span>
                        </div>
                    </div>
                    <div className="guarantee-card">
                        <div className="guarantee-header">
                            <span className="guarantee-icon">*</span>
                            <h4>LUC - Sin Garantia</h4>
                        </div>
                        <p>Para alquileres menores a 100 UR, la LUC establecio un mecanismo mas flexible. Proceso de desalojo mas abreviado en caso de incumplimiento.</p>
                        <div className="guarantee-details">
                            <span>Simplificado</span>
                            <span>&lt; 100 UR</span>
                            <span>No aceptada por Bien Seguro</span>
                        </div>
                    </div>
                </div>

                <div className="info-note">
                    <p>En algunos casos, podriamos solicitar referencias personales o comerciales y una constancia de domicilio.</p>
                </div>
            </>
        )
    },
    {
        id: 'reserva_bs',
        title: 'Proceso de Reserva',
        stage: 'Etapa 3: Reserva',
        stageColor: '#8b5cf6',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#8b5cf6'}}>Etapa 3</span>
                    <h2>Proceso de Reserva de tu Propiedad</h2>
                </div>

                <div className="process-flow">
                    <div className="process-step">
                        <div className="step-number">1</div>
                        <h4>Encuentra tu propiedad</h4>
                        <a href='https://bienseguro.com.uy/propiedades/Alquiler/U$S/Sin_precio_m%C3%ADnimo/Sin_precio_m%C3%A1ximo/Todos_los_tipos/Todas_las_zonas/Todos_los_tipos_agrupadores/Todos_los_estados/menor_precio'>Encontrá la propiedad que buscás en nuestra web</a>
                    </div>
                    <div className="process-arrow">→</div>
                    <div className="process-step">
                        <div className="step-number">2</div>
                        <h4>Acuerda el precio</h4>
                        <p>Negociamos las condiciones del alquiler contigo</p>
                    </div>
                    <div className="process-arrow">→</div>
                    <div className="process-step">
                        <div className="step-number">3</div>
                        <h4>Realiza el depósito</h4>
                        <p>Deposita el 50% de un mes de alquiler</p>
                    </div>
                </div>

                <div className="info-card highlight">
                    <h3>El Deposito de Reserva</h3>
                    <ul>
                        <li>Monto: <strong>Un mes de alquiler + IVA</strong></li>
                        <li>Seña: El monto de la seña cubre los aranceles de la inmobiliaria</li>
                        
                    </ul>
                </div>

                <div className="info-card">
                    <h3>Documentacion</h3>
                    <p>Simultaneamente, te proporcionaremos un documento donde se detallaran las condiciones del contrato de alquiler para que lo revises.</p>
                </div>
            </>
        )
    },
    {
        id: 'formalizacion_bs',
        title: 'Formalización Contrato',
        stage: 'Etapa 4: Firma',
        stageColor: '#ec4899',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#ec4899'}}>Etapa 4</span>
                    <h2>La Formalización del Contrato de Alquiler</h2>
                </div>

                <div className="checklist">
                    <h3>Checklist para la Firma</h3>
                    <div className="checklist-items">
                        <div className="checklist-item">
                            <span className="check">*</span>
                            <p>Tu garantia y documentacion han sido revisadas y aceptadas</p>
                        </div>
                        <div className="checklist-item">
                            <span className="check">*</span>
                            <p>Se coordina la fecha y hora para la firma del contrato</p>
                        </div>
                        <div className="checklist-item">
                            <span className="check">*</span>
                            <p>Se realiza el inventario detallado de la propiedad</p>
                        </div>
                    </div>
                </div>

                <div className="info-card">
                    <h3>En el Momento de la Firma</h3>
                    <ul>
                        <li><strong>Contrato:</strong> Establecera claramente los plazos, el monto del alquiler y todas las condiciones acordadas. Es importante que lo leas detenidamente.</li>
                        <li><strong>Garantia:</strong> Deberas presentar la garantia acordada</li>
                        <li><strong>Primer pago:</strong> Realizaras el primer mes de alquiler + gastos iniciales</li>
                    </ul>
                </div>

                <div className="info-card tip">
                    <h4>Recomendacion</h4>
                    <p>Recomendamos que el contrato incluya una clausula de resolucion anticipada para establecer las condiciones en caso de que necesites finalizar el contrato antes del plazo acordado.</p>
                </div>

                <div className="info-note">
                    <h4>Inscripcion en Registro de la Propiedad</h4>
                    <p>Te informaremos sobre la importancia de la inscripcion del contrato en el Registro de la Propiedad; aunque no siempre es obligatorio, ofrece mayor seguridad juridica.</p>
                </div>
            </>
        )
    },
    {
        id: 'costos_iniciales',
        title: 'Costos Iniciales',
        stage: 'Etapa 4: Firma',
        stageColor: '#ec4899',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#ec4899'}}>Etapa 4</span>
                    <h2>Entendiendo los Costos Iniciales</h2>
                </div>

                <div className="info-card warning">
                    <h3>Importante</h3>
                    <p>Al momento de firmar el contrato, es importante que tengas en cuenta los siguientes costos iniciales (generalmente a cargo del inquilino):</p>
                </div>

                <div className="costs-grid">
                    <div className="cost-card">
                        <div className="cost-icon">*</div>
                        <h4>Honorarios de la Inmobiliaria</h4>
                        <div className="cost-amount">1 mes de alquiler + IVA</div>
                        <p>Este monto cubre la redacción y revisión del contrato, la gestión de la firma, la realización del inventario detallado y el trámite de la garantía.</p>
                        <div className="cost-note">
                            <span>Se abona en efectivo</span>
                            <span>Hasta 6 cuotas (1% del contrato)</span>
                        </div>
                    </div>
                    <div className="cost-card">
                        <div className="cost-icon">*</div>
                        <h4>Mes de Alquiler Adelantado</h4>
                        <div className="cost-amount">1 mes</div>
                        <p>Aunque en Uruguay los alquileres suelen pagarse a mes vencido, algunos contratos pueden requerir un mes adelantado.</p>
                    </div>
                    <div className="cost-card">
                        <div className="cost-icon">*</div>
                        <h4>Aplicacion del Deposito</h4>
                        <div className="cost-amount">50% de 1 mes</div>
                        <p>El depósito de reserva que realizaste inicialmente se aplicará a la liquidación de estos costos iniciales.</p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'gastos_mensuales',
        title: 'Gastos Mensuales',
        stage: 'Etapa 5: Durante el Alquiler',
        stageColor: '#14b8a6',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#14b8a6'}}>Etapa 5</span>
                    <h2>Gastos Mensuales Adicionales</h2>
                </div>

                <div className="info-card">
                    <p>Ademas del pago mensual del alquiler acordado, como inquilino, seras responsable de los siguientes gastos de forma continua:</p>
                </div>

                <div className="monthly-costs">
                    <div className="monthly-cost-item">
                        <div className="monthly-icon">*</div>
                        <div className="monthly-info">
                            <h4>Gastos Comunes</h4>
                            <p>Mantenimiento general del edificio, limpieza de areas comunes y otros servicios administrados por la administracion del inmueble.</p>
                        </div>
                    </div>
                    <div className="monthly-cost-item">
                        <div className="monthly-icon">*</div>
                        <div className="monthly-info">
                            <h4>Tributos Domiciliarios</h4>
                            <p>Impuestos bimestrales cobrados por la Intendencia de Montevideo, conocidos popularmente como los "impuestos de puerta".</p>
                        </div>
                    </div>
                    <div className="monthly-cost-item">
                        <div className="monthly-icon">*</div>
                        <div className="monthly-info">
                            <h4>Pago del Alquiler</h4>
                            <p>Se realizara mensualmente a traves del banco segun lo estipulado en el contrato.</p>
                        </div>
                    </div>
                    <div className="monthly-cost-item">
                        <div className="monthly-icon">*</div>
                        <div className="monthly-info">
                            <h4>Servicios</h4>
                            <ul>
                                <li>UTE (luz)</li>
                                <li>OSE (agua)</li>
                                <li>Gas</li>
                                <li>ANTEL (internet/telefono)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="monthly-cost-item special">
                        <div className="monthly-icon">*</div>
                        <div className="monthly-info">
                            <h4>Para Casas</h4>
                            <p>Tarifa de saneamiento, tributos municipales y servicio de agua potable proporcionado por OSE.</p>
                        </div>
                    </div>
                </div>

                <div className="info-card warning">
                    <h4>Responsabilidad del Inquilino</h4>
                    <p>El pago de los consumos, gastos comunes u otros servicios accesorios a la locacion es tu responsabilidad. Si el propietario abona estos gastos por dos o mas meses, la deuda se considerara indivisible con el alquiler.</p>
                </div>
            </>
        )
    },
    {
        id: 'rol_inmobiliarias',
        title: 'Rol General Inmobiliarias',
        stage: 'Información General',
        stageColor: '#6366f1',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#6366f1'}}>Información</span>
                    <h2>El Rol General de las Inmobiliarias</h2>
                </div>

                <div className="info-card">
                    <p>Las inmobiliarias juegan un papel central en el proceso de alquiler. A continuación las principales funciones:</p>
                </div>

                <div className="roles-grid">
                    <div className="role-card">
                        <span className="role-icon">*</span>
                        <h4>Busqueda y Seleccion</h4>
                        <p>Ayudan en la busqueda y seleccion del inmueble (servicio al inquilino)</p>
                    </div>
                    <div className="role-card">
                        <span className="role-icon">*</span>
                        <h4>Gestion de Reserva</h4>
                        <p>Gestionan la reserva de la propiedad (servicio a ambos)</p>
                    </div>
                    <div className="role-card">
                        <span className="role-icon">*</span>
                        <h4>Verificacion de Documentos</h4>
                        <p>Solicitan y verifican la documentacion del inquilino y la garantia (servicio al arrendador)</p>
                    </div>
                    <div className="role-card">
                        <span className="role-icon">*</span>
                        <h4>Contratos</h4>
                        <p>Redactan y revisan el contrato de alquiler (servicio a ambos)</p>
                    </div>
                    <div className="role-card">
                        <span className="role-icon">*</span>
                        <h4>Inventario</h4>
                        <p>Realizan un inventario del inmueble (servicio a ambos)</p>
                    </div>
                    <div className="role-card">
                        <span className="role-icon">*</span>
                        <h4>Garantias</h4>
                        <p>Gestionan el tramite de la garantia de alquiler (servicio a ambos)</p>
                    </div>
                    <div className="role-card">
                        <span className="role-icon">*</span>
                        <h4>Intermediacion</h4>
                        <p>Actuan como intermediarios entre el inquilino y el propietario (servicio a ambos)</p>
                    </div>
                </div>

                <div className="info-card tip">
                    <h4>Verificacion Importante</h4>
                    <p>Se recomienda asegurarse de que la inmobiliaria este registrada en el Ministerio de Turismo, especialmente para alquileres turisticos, para evitar fraudes.</p>
                </div>
            </>
        )
    },
    {
        id: 'marco_legal',
        title: 'Marco Legal',
        stage: 'Información Legal',
        stageColor: '#374151',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#374151'}}>Legal</span>
                    <h2>Marco Legal Relevante</h2>
                </div>

                <div className="legal-cards">
                    <div className="legal-card">
                        <div className="legal-icon">*</div>
                        <h3>Ley 14.219</h3>
                        <p>Es fundamental, estableciendo el regimen de garantias, los procedimientos de desalojo y normativas especificas para los contratos de arrendamiento (diferenciando segun ano de construccion).</p>
                        <div className="legal-details">
                            <span>Garantias</span>
                            <span>Desalojos</span>
                            <span>Contratos</span>
                        </div>
                    </div>
                    <div className="legal-card">
                        <div className="legal-icon">*</div>
                        <h3>LUC</h3>
                        <p>La Ley de Urgente Consideracion introdujo el sistema de alquiler sin garantia tradicional (para alquileres &lt; 100 UR) con un proceso de desalojo mas abreviado (beneficio arrendador).</p>
                        <div className="legal-details">
                            <span>&lt; 100 UR</span>
                            <span>Desalojo rapido</span>
                        </div>
                    </div>
                    <div className="legal-card">
                        <div className="legal-icon">*</div>
                        <h3>Ley N°20.380</h3>
                        <p>Y el Decreto N°385/994 regulan la inscripcion y garantia de operadores inmobiliarios turisticos en ciertos departamentos.</p>
                        <div className="legal-details">
                            <span>Turismo</span>
                            <span>Registro</span>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'rescision',
        title: 'Rescisión de Contrato',
        stage: 'Etapa 5: Durante el Alquiler',
        stageColor: '#14b8a6',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#14b8a6'}}>Etapa 5</span>
                    <h2>Proceso y Consideraciones para la Rescisión</h2>
                </div>

                <div className="info-card warning">
                    <h3>Importante</h3>
                    <p>Rescindir un contrato de alquiler antes de su finalizacion puede ser un proceso complejo y generalmente implica ciertas condiciones.</p>
                </div>

                <div className="rescision-options">
                    <div className="rescision-card">
                        <h4>Rescision Anticipada</h4>
                        <ul>
                            <li>Requiere negociacion con el propietario o la inmobiliaria</li>
                            <li>Podria acarrear el pago de una multa estipulada en el contrato</li>
                            <li>Podria significar la perdida de la garantia</li>
                        </ul>
                    </div>
                    <div className="rescision-card">
                        <h4>Problemas en la Propiedad</h4>
                        <ul>
                            <li>Si surgen problemas graves no evidentes al inicio (humedad severa, problemas estructurales)</li>
                            <li>Podrias tener derecho a rescindir el contrato</li>
                            <li>Podria solicitarse una inspeccion de la garantia</li>
                        </ul>
                    </div>
                    <div className="rescision-card">
                        <h4>Transferencia del Contrato</h4>
                        <ul>
                            <li>Alternativa de transferir el contrato a otro inquilino</li>
                            <li>El nuevo inquilino debe cumplir con los requisitos</li>
                            <li>Requiere aprobacion del propietario</li>
                        </ul>
                    </div>
                </div>

                <div className="info-card tip">
                    <h4>Lectura Recomendada</h4>
                    <p>Te recomendamos leer detenidamente la clausula de resolucion anticipada que pueda estar incluida en el contrato.</p>
                </div>

                <div className="info-note">
                    <p>En cualquier situacion de rescision, te aconsejamos comunicarte con nosotros (Bien Seguro) para analizar las opciones disponibles y buscar la mejor solucion posible.</p>
                </div>
            </>
        )
    },
    {
        id: 'desalojos',
        title: 'Proceso de Desalojo',
        stage: 'Información Legal',
        stageColor: '#374151',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#374151'}}>Legal</span>
                    <h2>Información Importante sobre Desalojos</h2>
                </div>

                <div className="info-card">
                    <p>La Ley 14.219 establece las causales y los procedimientos para el desalojo de una propiedad. Durante la vigencia de los plazos legales del arrendamiento, no se puede iniciar una acción de desalojo, excepto en casos específicos.</p>
                </div>

                <div className="causales-section">
                    <h3>Causales de Desalojo</h3>
                    <div className="causales-grid">
                        <div className="causal-item">Incumplimiento del pago del alquiler</div>
                        <div className="causal-item">Necesidad del propietario de ocupar la vivienda</div>
                        <div className="causal-item">Necesidad de realizar reconstrucciones o demoliciones</div>
                        <div className="causal-item">Estado de ruina del inmueble</div>
                        <div className="causal-item">Vencimiento del plazo contractual</div>
                    </div>
                </div>

                <div className="considerations-section">
                    <h3>Consideraciones para Inquilinos</h3>
                    <div className="considerations-list">
                        <div className="consideration-item">
                            <span className="consideration-icon">*</span>
                            <p><strong>Año de gracia:</strong> En ciertos casos y bajo ciertas normativas (principalmente para fincas construidas antes del 2 de junio de 1968), otorga un plazo adicional al inquilino en caso de desalojo.</p>
                        </div>
                        <div className="consideration-item">
                            <span className="consideration-icon">*</span>
                            <p><strong>Buen pagador:</strong> Si estas al dia con tus pagos, podrias tener plazos mas amplios para la desocupacion en caso de desalojo por ciertas causales.</p>
                        </div>
                        <div className="consideration-item">
                            <span className="consideration-icon">*</span>
                            <p><strong>Entrega voluntaria:</strong> Debes comunicarlo al Juzgado. Si no lo haces, el propietario puede solicitar una comprobacion judicial.</p>
                        </div>
                        <div className="consideration-item">
                            <span className="consideration-icon">*</span>
                            <p><strong>Vulnerabilidad:</strong> Si te encuentras en situaciones de vulnerabilidad detalladas en la Ley 14.219, el lanzamiento podria suspenderse.</p>
                        </div>
                    </div>
                </div>

                <div className="info-card">
                    <h3>Procedimiento General</h3>
                    <ul>
                        <li>El procedimiento de desalojo se lleva a cabo ante los Juzgados de Paz del lugar donde se ubica el inmueble</li>
                        <li>Es un proceso por escrito que requiere la presentacion del contrato de arrendamiento</li>
                        <li>Cualquiera de las partes puede solicitar una inspeccion judicial del inmueble para verificar su estado</li>
                    </ul>
                </div>
            </>
        )
    },
    {
        id: 'consejos_inquilinos',
        title: 'Consejos para Inquilinos',
        stage: 'Consejos',
        stageColor: '#f97316',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#f97316'}}>Consejos</span>
                    <h2>Consejos para Inquilinos</h2>
                </div>

                <div className="tips-grid">
                    <div className="tip-card">
                        <div className="tip-number">1</div>
                        <h4>Evalúa tu situación financiera</h4>
                        <p>Considera los ingresos disponibles, liquidez inicial, urgencia y flexibilidad al elegir una garantía.</p>
                    </div>
                    <div className="tip-card">
                        <div className="tip-number">2</div>
                        <h4>Prepárate para los costos iniciales</h4>
                        <p>Estate preparado financieramente para los costos iniciales del alquiler.</p>
                    </div>
                    <div className="tip-card">
                        <div className="tip-number">3</div>
                        <h4>Pregunta siempre</h4>
                        <p>Siempre consultar y preguntar a la inmobiliaria o al propietario sobre cualquier duda.</p>
                    </div>
                    <div className="tip-card">
                        <div className="tip-number">4</div>
                        <h4>Investiga las opciones</h4>
                        <p>Investiga sobre las diferentes opciones de garantía disponibles.</p>
                    </div>
                    <div className="tip-card">
                        <div className="tip-number">5</div>
                        <h4>Lee el contrato</h4>
                        <p>Lee detenidamente el contrato de alquiler, incluyendo cláusulas de resolución anticipada.</p>
                    </div>
                    <div className="tip-card">
                        <div className="tip-number">6</div>
                        <h4>Guarda documentación</h4>
                        <p>Guarda copia de toda la documentación y comunicaciones.</p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'fraudes',
        title: 'Fraudes (Alq. Turísticos)',
        stage: 'Consejos',
        stageColor: '#f97316',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#f97316'}}>Consejos</span>
                    <h2>Precauciones Contra Fraudes</h2>
                </div>

                <div className="info-card warning">
                    <h3>Alertas</h3>
                    <p>Si estas interesado en alquileres temporales o turisticos, te recomendamos ser especialmente cauteloso con:</p>
                    <ul>
                        <li>Anuncios en redes sociales o plataformas no verificadas</li>
                        <li>Propiedades a precios demasiado atractivos</li>
                    </ul>
                </div>

                <div className="fraud-prevention">
                    <div className="prevention-step">
                        <div className="prevention-icon">*</div>
                        <h4>Verifica el Registro</h4>
                        <p>Antes de realizar cualquier pago, asegurate de que la inmobiliaria o el operador este debidamente registrado en el Ministerio de Turismo.</p>
                    </div>
                    <div className="prevention-step">
                        <div className="prevention-icon">*</div>
                        <h4>Ley N°20.380</h4>
                        <p>De acuerdo con esta ley, todos los operadores inmobiliarios en Maldonado, Rocha, Canelones y Colonia deben estar inscriptos y constituir una garantia.</p>
                    </div>
                    <div className="prevention-step">
                        <div className="prevention-icon">*</div>
                        <h4>Transparencia</h4>
                        <p>Prioriza siempre la transparencia y la confianza en tus interacciones.</p>
                    </div>
                </div>

                <div className="info-card success">
                    <h4>Verificacion Simple</h4>
                    <p>Esta simple verificacion puede evitarte ser victima de estafas y garantizarte unas vacaciones sin contratiempos.</p>
                </div>
            </>
        )
    },
    {
        id: 'glosario',
        title: 'Glosario',
        stage: 'Recursos',
        stageColor: '#6b7280',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#6b7280'}}>Recursos</span>
                    <h2>Glosario de Términos Útiles</h2>
                </div>

                <div className="glossary-grid">
                    <div className="glossary-item">
                        <span className="glossary-term">ANDA</span>
                        <p>Asociación Nacional de Afiliados. Mutual que ofrece garantías de alquiler.</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">ANTEL</span>
                        <p>Empresa estatal de telecomunicaciones (internet, telefonía).</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">BHU</span>
                        <p>Banco Hipotecario del Uruguay. Banco estatal que gestiona depósitos en garantía y otorga préstamos para vivienda.</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">CGN</span>
                        <p>Contaduría General de la Nación. Organismo estatal que ofrece garantías de alquiler.</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">Clearing de Informes</span>
                        <p>Base de datos sobre el historial crediticio de las personas en Uruguay.</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">IVA</span>
                        <p>Impuesto al Valor Agregado.</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">LUC</span>
                        <p>Ley de Urgente Consideración. Ley que introdujo modificaciones en diversos ámbitos, incluyendo garantías de alquiler.</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">OHR</span>
                        <p>Obligaciones Hipotecarias Reajustables. Títulos de deuda emitidos por el BHU.</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">OSE</span>
                        <p>Obras Sanitarias del Estado. Empresa estatal proveedora de agua potable y saneamiento.</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">UI</span>
                        <p>Unidad Indexada. Unidad de valor utilizada para actualizar precios y salarios.</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">UR</span>
                        <p>Unidad Reajustable. Unidad de valor utilizada para determinar montos en contratos de alquiler.</p>
                    </div>
                    <div className="glossary-item">
                        <span className="glossary-term">UTE</span>
                        <p>Administración Nacional de Usinas y Trasmisiones Eléctricas. Empresa estatal proveedora de energía eléctrica.</p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'recursos',
        title: 'Recursos Útiles',
        stage: 'Recursos',
        stageColor: '#6b7280',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#6b7280'}}>Recursos</span>
                    <h2>Recursos Útiles</h2>
                </div>

                <div className="resources-grid">
                    <div className="resource-card">
                        <div className="resource-icon">*</div>
                        <h4>Indicadores de Mercado</h4>
                        <p>Indicadores de Mercado de Alquileres y Compraventa del INE (Instituto Nacional de Estadistica).</p>
                    </div>
                    <div className="resource-card">
                        <div className="resource-icon">*</div>
                        <h4>Preguntas Frecuentes</h4>
                        <p>Preguntas Frecuentes sobre Garantia de Alquileres del MEF (Ministerio de Economia y Finanzas).</p>
                    </div>
                    <div className="resource-card">
                        <div className="resource-icon">*</div>
                        <h4>Asesoramiento Habitacional</h4>
                        <p>Servicio de asesoramiento sobre derechos habitacionales de la Intendencia de Montevideo (Oficina de Rehabilitacion Urbana, asesoramiento gratuito miercoles y viernes).</p>
                    </div>
                    <div className="resource-card">
                        <div className="resource-icon">*</div>
                        <h4>Portales Inmobiliarios</h4>
                        <p>InfoCasas, Mercado Libre, Gallito Luis, Argenprop, etc.</p>
                    </div>
                    <div className="resource-card">
                        <div className="resource-icon">*</div>
                        <h4>Ministerio de Turismo</h4>
                        <p>Sitio web para verificar registro de operadores turisticos.</p>
                    </div>
                    <div className="resource-card">
                        <div className="resource-icon">*</div>
                        <h4>Entidades Financieras</h4>
                        <p>Sitio web de BHU, ANDA, CGN, Aseguradoras (para informacion sobre garantias).</p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'apoyo_bs',
        title: 'Apoyo Bien Seguro',
        stage: 'Contacto',
        stageColor: '#059669',
        content: (
            <>
                <div className="stage-header">
                    <span className="stage-badge" style={{backgroundColor: '#059669'}}>Contacto</span>
                    <h2>Estamos Aquí para Brindarte Apoyo</h2>
                </div>

                <div className="contact-section">
                    <div className="contact-card">
                        <div className="contact-icon">*</div>
                        <h3>Inmobiliaria Bien Seguro</h3>
                        <p>Nuestro principal objetivo es ofrecerte un servicio basado en la transparencia, la confianza y la profesionalidad.</p>
                    </div>
                </div>

                <div className="info-card highlight final">
                    <h3>Comunicacion Abierta</h3>
                    <p>No dudes en consultarnos y preguntar siempre cualquier duda que te surja durante el proceso de alquiler. Estamos aqui para ayudarte a encontrar tu hogar ideal en Uruguay.</p>
                </div>

                <div className="info-note">
                    <p>Si te encuentras en una situación de vulnerabilidad de derechos habitacionales, también puedes contactar con el Servicio de asesoramiento sobre derechos habitacionales de la Intendencia de Montevideo.</p>
                </div>

                <div className="thank-you">
                    <div className="thank-you-icon">*</div>
                    <h3>Gracias por elegir Inmobiliaria Bien Seguro!</h3>
                    <p>Espero poder ayudarte a encontrar tu proximo hogar.</p>
                </div>
            </>
        )
    }
];

// --- Grupos de etapas para el menú ---
const stageGroups = [
    {
        id: 'inicio',
        title: 'Inicio',
        
        modules: ['bienvenida']
    },
    {
        id: 'busqueda',
        title: 'Busqueda',
        
        modules: ['encontrar_propiedad_bs']
    },
    {
        id: 'info',
        title: 'Informacion',
        
        modules: ['introduccion_general', 'rol_inmobiliarias', 'marco_legal', 'desalojos']
    },
    {
        id: 'documentacion',
        title: 'Documentacion',
        
        modules: ['requisitos_garantias']
    },
    {
        id: 'reserva_firma',
        title: 'Reserva y Firma',
       
        modules: ['reserva_bs', 'formalizacion_bs', 'costos_iniciales']
    },
    {
        id: 'alquiler',
        title: 'Durante el Alquiler',
        
        modules: ['gastos_mensuales', 'rescision']
    },
    {
        id: 'consejos',
        title: 'Consejos',
        
        modules: ['consejos_inquilinos', 'fraudes']
    },
    {
        id: 'recursos',
        title: 'Recursos',
        
        modules: ['glosario', 'recursos']
    },
    {
        id: 'contacto',
        title: 'Contacto',
        
        modules: ['apoyo_bs']
    }
];

// --- Iconos para el sidebar ---
const icons = {
    'bienvenida': '*',
    'encontrar_propiedad_bs': '*',
    'introduccion_general': '*',
    'requisitos_garantias': '*',
    'reserva_bs': '*',
    'formalizacion_bs': '*',
    'costos_iniciales': '*',
    'gastos_mensuales': '*',
    'rol_inmobiliarias': '*',
    'marco_legal': '*',
    'rescision': '*',
    'desalojos': '*',
    'consejos_inquilinos': '*',
    'fraudes': '*',
    'glosario': '*',
    'recursos': '*',
    'apoyo_bs': '*'
};

// Componente Menú Desplegable para Móvil (cabecera)
const MobileMenu = ({ isOpen, onToggle, onClose, stageGroups, activeSection, setActiveSection }) => {
    return (
        <div className="mobile-header">
            <div className="mobile-header-bar">
                <h3 className="mobile-header-title">Guia Bien Seguro</h3>
                <button className="menu-toggle" onClick={onToggle}>
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>
            {isOpen && (
                <div className="mobile-dropdown" onClick={e => e.stopPropagation()}>
                    <nav className="mobile-nav">
                        {stageGroups.map(group => (
                            <div key={group.id} className="mobile-group">
                                <div className="mobile-group-title">
                                    <span className="group-icon">{group.icon}</span>
                                    {group.title}
                                </div>
                                <ul className="mobile-modules">
                                    {group.modules.map(moduleId => {
                                        const module = modulesData.find(m => m.id === moduleId);
                                        return (
                                            <li key={moduleId}>
                                                <button
                                                    className={`mobile-module-btn ${activeSection === moduleId ? 'active' : ''}`}
                                                    onClick={() => {
                                                        setActiveSection(moduleId);
                                                        window.location.hash = moduleId;
                                                        onClose();
                                                    }}
                                                >
                                                    <span className="module-icon">{icons[moduleId]}</span>
                                                    {module?.title}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
};

// Componente Sidebar
const Sidebar = ({ stageGroups, activeSection, setActiveSection, onMenuClick }) => {
    return (
        <aside id="sidebar" className="sidebar">
            <div className="sidebar-header">
                <h2 className="sidebar-title">Guia Bien Seguro</h2>
                <button className="menu-toggle" onClick={onMenuClick}>
                    ☰
                </button>
            </div>
            <nav className="sidebar-nav">
                {stageGroups.map(group => (
                    <div key={group.id} className="nav-group">
                        <div className="nav-group-title">
                            <span className="group-icon">{group.icon}</span>
                            {group.title}
                        </div>
                        <ul className="nav-modules">
                            {group.modules.map(moduleId => {
                                const module = modulesData.find(m => m.id === moduleId);
                                const isActive = activeSection === moduleId;
                                return (
                                    <li key={moduleId}>
                                        <button
                                            className={`nav-module-btn ${isActive ? 'active' : ''}`}
                                            onClick={() => {
                                                setActiveSection(moduleId);
                                                window.location.hash = moduleId;
                                            }}
                                        >
                                            <span className="module-icon">{icons[moduleId]}</span>
                                            <span className="module-title">{module?.title}</span>
                                            {isActive && <span className="active-indicator">•</span>}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
};

// Componente Content
const Content = ({ module, activeModuleIndex, totalModules, onNavigate }) => {
    const contentRef = useRef(null);
    const currentIndex = modulesData.findIndex(m => m.id === module?.id);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [module]);

    if (!module) {
        return null;
    }

    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < modulesData.length - 1;

    return (
        <main id="content" ref={contentRef} className="content">
            <div className="content-wrapper">
                <div className="content-card">
                    <div className="content-section active">
                        {module.content}
                    </div>
                </div>
                
                {/* Navegación entre módulos */}
                <div className="module-navigation">
                    <button 
                        className={`nav-btn prev ${!hasPrev ? 'disabled' : ''}`}
                        onClick={() => hasPrev && onNavigate(currentIndex - 1)}
                        disabled={!hasPrev}
                    >
                        <span className="nav-arrow">←</span>
                        <span className="nav-label">Anterior</span>
                    </button>
                    <div className="nav-info">
                        <span className="nav-progress">{currentIndex + 1} / {modulesData.length}</span>
                    </div>
                    <button 
                        className={`nav-btn next ${!hasNext ? 'disabled' : ''}`}
                        onClick={() => hasNext && onNavigate(currentIndex + 1)}
                        disabled={!hasNext}
                    >
                        <span className="nav-label">Siguiente</span>
                        <span className="nav-arrow">→</span>
                    </button>
                </div>
            </div>
        </main>
    );
};

// Componente Principal App
function App() {
    const [activeSection, setActiveSection] = useState('bienvenida');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            const isValidModule = modulesData.some(module => module.id === hash);
            setActiveSection(isValidModule ? hash : 'bienvenida');
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const activeModule = modulesData.find(module => module.id === activeSection);
    const activeModuleIndex = modulesData.findIndex(module => module.id === activeSection);

    const handleNavigate = (index) => {
        const module = modulesData[index];
        setActiveSection(module.id);
        window.location.hash = module.id;
    };

    return (
        <div className="app">
            <Sidebar
                stageGroups={stageGroups}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                onMenuClick={() => setMobileMenuOpen(true)}
            />
            <MobileMenu
                isOpen={mobileMenuOpen}
                onToggle={() => setMobileMenuOpen(o => !o)}
                onClose={() => setMobileMenuOpen(false)}
                stageGroups={stageGroups}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <Content 
                module={activeModule} 
                activeModuleIndex={activeModuleIndex}
                totalModules={modulesData.length}
                onNavigate={handleNavigate}
            />
        </div>
    );
}

export default App;
