# 🚀 Guía de Despliegue a GitHub Pages

## 📋 Pasos para Subir tu Proyecto a GitHub Pages

### 1. 🔧 Configuración del Repositorio

#### Opción A: Repositorio con nombre personalizado (recomendado)
Si tu repositorio se llama `certivo-landingPage`:

1. **Descomenta estas líneas en `next.config.ts`:**
   ```typescript
   basePath: '/certivo-landingPage',
   assetPrefix: '/certivo-landingPage/',
   ```

2. **Tu sitio estará disponible en:**
   ```
   https://tuusuario.github.io/certivo-landingPage/
   ```

#### Opción B: Repositorio con nombre username.github.io
Si tu repositorio se llama `tuusuario.github.io`:

1. **Mantén las líneas comentadas en `next.config.ts`**
2. **Tu sitio estará disponible en:**
   ```
   https://tuusuario.github.io/
   ```

### 2. 📤 Subir a GitHub

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Certivo landing page"

# Conectar con tu repositorio (reemplaza con tu URL)
git remote add origin https://github.com/tuusuario/certivo-landingPage.git

# Subir a GitHub
git push -u origin main
```

### 3. ⚙️ Configurar GitHub Pages

1. **Ve a tu repositorio en GitHub**
2. **Click en "Settings"**
3. **Scroll hasta "Pages" en el menú lateral**
4. **En "Source" selecciona "GitHub Actions"**
5. **Guarda los cambios**

### 4. 🔄 Despliegue Automático

El archivo `.github/workflows/deploy.yml` ya está configurado para:
- ✅ Detectar cambios en la rama `main`
- ✅ Instalar dependencias
- ✅ Hacer build del proyecto
- ✅ Desplegar automáticamente a GitHub Pages

### 5. 🎯 Verificar el Despliegue

1. **Ve a la pestaña "Actions" en tu repositorio**
2. **Espera a que termine el workflow (verde)**
3. **Visita tu sitio en la URL de GitHub Pages**

## 🔧 Comandos Útiles

```bash
# Build local para probar
npm run build

# Ver archivos generados
ls out/

# Probar localmente el build de producción
npx serve out
```

## 🐛 Solución de Problemas

### ❌ Error: "Module not found"
- Verifica que todas las dependencias estén en `package.json`
- Ejecuta `npm install` antes del build

### ❌ Error: "Images not loading"
- Las imágenes deben estar en la carpeta `public/`
- Verifica las rutas en tus componentes

### ❌ Error: "CSS not loading"
- Verifica que Tailwind CSS esté configurado correctamente
- Asegúrate de que `globals.css` esté importado en `layout.tsx`

## ✅ Checklist Final

- [ ] Repositorio creado en GitHub
- [ ] Código subido a GitHub
- [ ] GitHub Pages configurado con GitHub Actions
- [ ] Workflow ejecutado exitosamente
- [ ] Sitio accesible en la URL de GitHub Pages
- [ ] Todas las secciones funcionando correctamente
- [ ] Redes sociales funcionando
- [ ] Tema claro/oscuro funcionando

---

**¡Tu sitio estará disponible en GitHub Pages automáticamente cada vez que hagas push a la rama main!** 🎉
