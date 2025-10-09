# 🏗️ Arquitectura del Proyecto Certivo

## Clean Architecture + Atomic Design + Features

Este proyecto implementa una arquitectura moderna y escalable combinando tres patrones arquitectónicos:

---

## 📁 Estructura de Directorios

```
src/
├── core/                          # 🎯 CLEAN ARCHITECTURE - Lógica de negocio
│   ├── domain/                    # Capa de dominio (reglas de negocio)
│   │   ├── entities/              # Entidades del dominio (User, Checklist, etc.)
│   │   ├── use-cases/             # Casos de uso (LoginUseCase, etc.)
│   │   └── repositories/          # Interfaces/contratos de repositorios
│   ├── application/               # Capa de aplicación
│   │   ├── services/              # Servicios de aplicación
│   │   └── dto/                   # Data Transfer Objects
│   └── infrastructure/            # Implementaciones externas
│       ├── api/                   # Clientes HTTP
│       ├── persistence/           # LocalStorage, IndexedDB, etc.
│       └── auth/                  # Implementación de autenticación
│
├── shared/                        # 🔧 RECURSOS COMPARTIDOS
│   ├── ui/                        # 🧪 ATOMIC DESIGN
│   │   ├── atoms/                 # Componentes básicos (Button, Input, Card)
│   │   ├── molecules/             # Componentes compuestos simples
│   │   ├── organisms/             # Componentes complejos (Navbar, Footer)
│   │   └── templates/             # Plantillas de layout
│   ├── hooks/                     # Custom hooks compartidos
│   ├── utils/                     # Funciones utilitarias
│   ├── constants/                 # Constantes globales
│   └── types/                     # TypeScript types globales
│
├── features/                      # 🎁 MODULARIDAD POR FEATURES
│   ├── landing/                   # Feature: Landing page
│   │   ├── domain/                # Lógica de negocio específica
│   │   ├── components/            # Componentes del feature
│   │   ├── hooks/                 # Hooks específicos del feature
│   │   ├── services/              # Servicios del feature
│   │   └── pages/                 # Páginas del feature
│   │
│   ├── auth/                      # Feature: Autenticación
│   │   ├── domain/entities/       # User entity
│   │   ├── components/            # LoginForm, ProtectedRoute
│   │   ├── hooks/                 # useAuth
│   │   ├── services/              # authService
│   │   └── pages/                 # LoginPage
│   │
│   ├── dashboard/                 # Feature: Dashboard principal
│   ├── checklists/                # Feature: Listas de verificación
│   ├── productores/               # Feature: Gestión de productores
│   ├── e-learning/                # Feature: Cursos y capacitaciones
│   └── reports/                   # Feature: Reportes y auditorías
│
└── app/                           # 🚀 NEXT.JS APP ROUTER
    ├── (landing)/                 # Route group: Landing pages
    │   ├── layout.tsx
    │   └── page.tsx
    ├── (auth)/                    # Route group: Auth pages
    │   ├── layout.tsx
    │   └── login/page.tsx
    ├── (dashboard)/               # Route group: Dashboard pages
    │   ├── layout.tsx
    │   └── dashboard/
    │       ├── page.tsx
    │       ├── checklists/page.tsx
    │       ├── productores/page.tsx
    │       ├── e-learning/page.tsx
    │       └── reports/page.tsx
    ├── layout.tsx                 # Root layout
    └── globals.css                # Estilos globales
```

---

## 🧩 Principios de Arquitectura

### 1. Clean Architecture

**Dependencias unidireccionales**: El código fluye de afuera hacia adentro.

```
Infrastructure → Application → Domain
```

- **Domain**: Contiene la lógica de negocio pura, sin dependencias externas
- **Application**: Orquesta los casos de uso
- **Infrastructure**: Implementaciones concretas (API, DB, etc.)

**Ventajas**:
- ✅ Testeable
- ✅ Independiente de frameworks
- ✅ Fácil de mantener
- ✅ Reutilizable en diferentes plataformas

### 2. Atomic Design

Componentes organizados en niveles de complejidad:

```
Átomos → Moléculas → Organismos → Templates → Pages
```

- **Átomos**: Componentes básicos (Button, Input, Label)
- **Moléculas**: Combinaciones simples (SearchBar, FormField)
- **Organismos**: Componentes complejos (Navbar, Footer, DataTable)
- **Templates**: Estructuras de layout
- **Pages**: Páginas completas

**Ventajas**:
- ✅ Reutilización máxima
- ✅ Consistencia en UI
- ✅ Fácil de documentar con Storybook
- ✅ Design System ready

### 3. Modularidad por Features

Cada feature es un módulo independiente y auto-contenido:

```typescript
features/
  checklists/
    domain/        // Lógica de negocio
    components/    // UI del feature
    hooks/         // Hooks específicos
    services/      // Servicios del feature
    pages/         // Páginas del feature
    index.ts       // Public API del módulo
```

**Ventajas**:
- ✅ Equipos pueden trabajar independientemente
- ✅ Fácil agregar/remover features
- ✅ Bajo acoplamiento
- ✅ Code splitting automático
- ✅ Micro-frontends ready

---

## 🔥 Patrones y Mejores Prácticas

### Imports

Usa path aliases para imports limpios:

```typescript
// ✅ Correcto
import { Button } from "@/shared/ui/atoms/button"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { User } from "@/core/domain/entities/User"

// ❌ Incorrecto
import { Button } from "../../../shared/ui/atoms/button"
```

### Barrel Exports

Cada carpeta exporta su API pública mediante `index.ts`:

```typescript
// features/auth/index.ts
export * from "./components"
export * from "./hooks/useAuth"
export * from "./services/authService"
```

### Separación de Responsabilidades

```typescript
// ✅ Correcto: Lógica en el dominio
class User {
  isAdmin(): boolean {
    return this.role === 'admin'
  }
}

// ❌ Incorrecto: Lógica en el componente
function UserCard({ user }) {
  const isAdmin = user.role === 'admin' // ❌
}
```

### Feature Flags

Los features están desacoplados y pueden activarse/desactivarse fácilmente:

```typescript
// config/features.ts
export const FEATURES = {
  checklists: true,
  elearning: true,
  reports: false, // Desactivado temporalmente
}
```

---

## 🚀 Escalabilidad

### Agregar un Nuevo Feature

1. **Crear estructura**:
   ```bash
   mkdir -p src/features/nuevo-feature/{domain,components,hooks,services,pages}
   ```

2. **Implementar dominio**:
   ```typescript
   // src/features/nuevo-feature/domain/entities/Entity.ts
   export class Entity { ... }
   ```

3. **Crear servicios**:
   ```typescript
   // src/features/nuevo-feature/services/service.ts
   export const service = { ... }
   ```

4. **Componentes y páginas**:
   ```typescript
   // src/features/nuevo-feature/pages/Page.tsx
   export default function Page() { ... }
   ```

5. **Agregar ruta**:
   ```typescript
   // src/app/(dashboard)/nuevo-feature/page.tsx
   import Page from "@/features/nuevo-feature/pages/Page"
   export default Page
   ```

### Micro-frontends

Cada feature puede convertirse en un paquete npm independiente:

```bash
# Publicar un feature como paquete
npm publish @certivo/feature-checklists
```

---

## 📊 Beneficios de esta Arquitectura

| Aspecto | Beneficio |
|---------|-----------|
| **Mantenibilidad** | Código organizado y fácil de entender |
| **Testabilidad** | Lógica separada de UI, fácil de testear |
| **Escalabilidad** | Agregar features sin romper existentes |
| **Performance** | Code splitting automático por feature |
| **DX** | Developer Experience optimizada |
| **Team Scale** | Múltiples equipos trabajando en paralelo |

---

## 🛠️ Tecnologías

- **Next.js 15** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Componentes UI
- **Lucide React** - Iconos

---

## 📚 Referencias

- [Clean Architecture - Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Atomic Design - Brad Frost](https://atomicdesign.bradfrost.com/)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Next.js App Router](https://nextjs.org/docs/app)

---

## 👥 Equipo

Esta arquitectura permite que múltiples equipos trabajen simultáneamente:

- **Team Frontend**: shared/ui components
- **Team Auth**: features/auth
- **Team Dashboard**: features/dashboard
- **Team Certifications**: features/checklists, features/reports
- **Team Learning**: features/e-learning

---

## 🎯 Próximos Pasos

1. ✅ Estructura base creada
2. ✅ Features migrados
3. ⏳ Tests unitarios
4. ⏳ Tests de integración
5. ⏳ Storybook para componentes
6. ⏳ CI/CD pipeline

---

**Documentación actualizada**: $(date '+%Y-%m-%d')

