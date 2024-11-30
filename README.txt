-------------------------------
ACTUALMENTE IMPLETANDO       
AUTENTICACION Y BASE DE DATOS
DESDE FIREBASE
-------------------------------

FASE 1: Preparación
 1. Definir flujo (listo).
 2. Definir CSS (listo, usarás Bootstrap).
 3. Definir base de datos:
	3.1Seleccionar Firebase (listo).
	3.2Configurar proyecto en Firebase (crear el proyecto y configurar API keys).

 4.Organización de carpetas y archivos:
 +Crear estructura:
	/src (código fuente).
	/assets (imágenes, CSS, JS).
	/docs (manuales y documentación).
	/dist (builds finales, opcional).

 5. GitHub:
 - Crear el repositorio (se puede subir en la FASE 1).
 - Subir archivos base una vez que tengas la estructura inicial.
 - Hacer commits frecuentes después de cada funcionalidad añadida.

 6. README.TXT:
 - Describir el propósito del proyecto.
 - Indicar cómo instalar dependencias, configurar Firebase y ejecutar el proyecto.

------------------------------------

FASE 2: Front-End
Diseñar y desarrollar páginas web:

 1. Registro:
  - Formulario con campos necesarios (nombre, correo, contraseña, etc.).

 2. Log in:
  - Formulario para ingresar correo y contraseña.
  - Campo para Captcha (opcional en esta fase, se puede agregar en la FASE 3).

 3. Perfil:
  - Página que muestre los datos del usuario.
  - Funcionalidad para editar información del perfil.
  - Log out

 4. Logs: *PENDIENTE*
  - Página que muestre las sesiones iniciadas por el usuario (puede ser una lista con fechas y horarios).

 5. Actualizar perfil: *PENDIENTE*
  - Página o modal para modificar datos personales como nombre, contraseña o preferencias.

 6. SUBIR CAMBIOS A GITHUB

------------------------------------

FASE 3: Back-End
Implementar lógica de negocio y seguridad:

 1. Validaciones de texto:

  - Verificar longitud mínima/máxima de contraseñas.
  - Validar que correos tengan formato correcto.
  - Asegurar que campos obligatorios no estén vacíos.

 2. Conexión a base de datos (Firebase):
  - Configurar reglas de seguridad para Firestore.
  - Crear y actualizar registros de usuarios en la base de datos.
  - Consultar información para mostrarla en el perfil y logs.

 3. Implementación de seguridad:
  3.1 Captcha:
   - Integrar Google reCAPTCHA v2

  3.2 Tokens:
   - Usar tokens de autenticación (Firebase Authentication puede generar estos tokens).

  3.3 Hash:
   - Asegurarte de que las contraseñas se almacenan como hashes (Firebase Authentication lo maneja automáticamente).

  4.Cookies:
   - Usar cookies seguras para manejar sesiones de usuario.

  5.Tiempo límite de sesión:
   - Configurar expiración automática de sesiones inactivas.

  6. Límite de intentos fallidos:
   - Bloquear temporalmente el acceso después de varios intentos fallidos.
   - Registrar en Firebase un contador de intentos por usuario.