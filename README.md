# 🌾 Certivo - Certificaciones Agrícolas Simplificadas

> Plataforma para democratizar el acceso a certificaciones internacionales con microlearning ágil y herramientas prácticas para productores agrícolas.

---

## 🏗️ Arquitectura

Este proyecto utiliza una arquitectura moderna y escalable combinando:

- **Clean Architecture** - Separación de responsabilidades y lógica de negocio independiente
- **Atomic Design** - Sistema de diseño escalable y reutilizable
- **Feature-based Architecture** - Módulos independientes y desacoplados

📖 **Documentación completa**: Ver [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 📁 Estructura del Proyecto

```
src/
├── core/                    # 🎯 Lógica de negocio (Clean Architecture)
│   ├── domain/              # Entidades y casos de uso
│   ├── application/         # Servicios de aplicación
│   └── infrastructure/      # Implementaciones concretas
│
├── shared/                  # 🔧 Recursos compartidos
│   ├── ui/                  # Atomic Design (atoms, molecules, organisms)
│   ├── hooks/               # Custom hooks
│   └── utils/               # Utilidades
│
├── features/                # 🎁 Features (módulos independientes)
│   ├── landing/             # Landing page
│   ├── auth/                # Autenticación
│   ├── dashboard/           # Dashboard principal
│   ├── checklists/          # Listas de verificación
│   ├── productores/         # Gestión de productores
│   ├── e-learning/          # Cursos y capacitaciones
│   └── reports/             # Reportes y auditorías
│
└── app/                     # 🚀 Next.js App Router
    ├── (landing)/           # Páginas públicas
    ├── (auth)/              # Autenticación
    └── (dashboard)/         # Dashboard protegido
```

---

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start

# Verificar linting
npm run lint
```

### URLs

- **Landing**: http://localhost:3000
- **Login**: http://localhost:3000/login
- **Dashboard**: http://localhost:3000/dashboard

---

## 🛠️ Tecnologías

| Categoría | Tecnología |
|-----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Lenguaje** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | Shadcn/ui |
| **Iconos** | Lucide React |
| **Arquitectura** | Clean Architecture + Atomic Design |

---

## 📦 Features

### ✅ Implementados

- **Landing Page** - Página principal con información del producto
- **Autenticación** - Sistema de login con gestión de sesiones
- **Dashboard** - Panel principal con estadísticas
- **Checklists** - Gestión de listas de verificación
- **Productores** - Administración de productores agrícolas
- **E-Learning** - Plataforma de cursos
- **Reports** - Sistema de reportes y auditorías

### 🚧 En Desarrollo

- Integración con backend real
- Tests unitarios y de integración
- Storybook para componentes

---

## 🎯 Principios de Desarrollo

### Clean Architecture

```
Infrastructure → Application → Domain
```

- Lógica de negocio independiente de frameworks
- Testeable y mantenible
- Fácil de escalar

### Atomic Design

```
Átomos → Moléculas → Organismos → Templates → Pages
```

- Componentes reutilizables
- Design System consistente
- Fácil de documentar

### Feature Modules

```
features/
  feature-name/
    domain/        # Lógica de negocio
    components/    # UI
    hooks/         # Hooks personalizados
    services/      # Servicios
    pages/         # Páginas
```

- Módulos independientes
- Bajo acoplamiento
- Code splitting automático

---

## 📚 Documentación

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitectura completa del proyecto
- [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) - Resumen de la migración arquitectónica

---

## 🤝 Contribuir

### Agregar un Nuevo Feature

```bash
# 1. Crear estructura
mkdir -p src/features/nuevo-feature/{domain,components,hooks,services,pages}

# 2. Implementar lógica de dominio
# 3. Crear componentes
# 4. Agregar servicios
# 5. Crear páginas
# 6. Agregar ruta en app router
```

### Convenciones

- **Imports**: Usar path aliases (`@/shared`, `@/features`, `@/core`)
- **Componentes**: PascalCase (`MyComponent.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useMyHook.ts`)
- **Servicios**: camelCase (`myService.ts`)

---

## 📝 Scripts

```bash
npm run dev          # Desarrollo
npm run build        # Build
npm run start        # Producción
npm run lint         # Linting
```

---

## 🏆 Beneficios de la Arquitectura

| Aspecto | Beneficio |
|---------|-----------|
| **Escalabilidad** | ✅ Altamente escalable - 10+ devs en paralelo |
| **Mantenibilidad** | ✅ Código organizado y fácil de entender |
| **Testabilidad** | ✅ Lógica separada de UI |
| **Performance** | ✅ Code splitting automático |
| **DX** | ✅ Developer Experience optimizada |
| **Reusabilidad** | ✅ Alto nivel de reutilización |

---

## 📞 Contacto

- **Proyecto**: Certivo
- **Descripción**: Certificaciones Agrícolas Simplificadas
- **Arquitectura**: Clean Architecture + Atomic Design + Features

---

## 📄 Licencia

Este proyecto es privado y confidencial.

---

**Última actualización**: $(date)
