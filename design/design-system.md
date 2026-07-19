# Palworld Breeding Calculator — Design System

> 阶段：06-design  
> 状态：与 Visual Style Rationale 配套使用  
> 版本：v0.1

---

## 1. 颜色系统

### 背景 / 表面

| Token | 色值 | 用途 |
|---|---|---|
| `--bg-page` | `#0B0F12` | 页面主背景 |
| `--bg-surface` | `#151A1E` | 卡片、面板背景 |
| `--bg-elevated` | `#1E252B` | 悬浮、下拉、选中态 |
| `--bg-input` | `#0F1417` | 输入框背景 |

### 文字

| Token | 色值 | 用途 |
|---|---|---|
| `--text-primary` | `#F0F2F5` | 主标题、重要数据 |
| `--text-secondary` | `#B8BFC6` | 正文、说明 |
| `--text-muted` | `#8A9499` | 辅助、placeholder |
| `--text-disabled` | `#5C6469` | 禁用 |

### 强调色

| Token | 色值 | 用途 |
|---|---|---|
| `--accent-primary` | `#F5A623` | 主 CTA、高亮、重要徽章 |
| `--accent-primary-hover` | `#FFBB4D` | 主按钮 hover |
| `--accent-secondary` | `#4ECDC4` | 成功、版本徽章、数据 freshness |
| `--accent-info` | `#5AA9E6` | 信息提示 |
| `--accent-warning` | `#E9C46A` | 警告 |
| `--accent-danger` | `#E76F51` | 错误、危险 |

### 类型色（Pal Elements）

| 类型 | 色值 | Token |
|---|---|---|
| Neutral | `#9CA3AF` | `--type-neutral` |
| Fire | `#EF4444` | `--type-fire` |
| Water | `#3B82F6` | `--type-water` |
| Grass | `#22C55E` | `--type-grass` |
| Electric | `#EAB308` | `--type-electric` |
| Ice | `#06B6D4` | `--type-ice` |
| Ground | `#A16207` | `--type-ground` |
| Dark | `#8B5CF6` | `--type-dark` |
| Dragon | `#4F46E5` | `--type-dragon` |

### 边框与分隔

| Token | 色值 | 用途 |
|---|---|---|
| `--border-subtle` | `#1F272D` | 卡片边框、分隔线 |
| `--border-default` | `#2A343C` | 输入框、按钮边框 |
| `--border-focus` | `#F5A623` | focus 状态 |

---

## 2. 字体系统

### 字体栈

- **UI 字体**：`Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **数据/等宽**：`"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace`

### 字号 scale

| Token | 桌面 | 移动 | 字重 | 用途 |
|---|---|---|---|---|
| `--text-display` | 48px | 32px | 800 | Hero H1 |
| `--text-h1` | 36px | 28px | 700 | 页面 H1 |
| `--text-h2` | 28px | 22px | 700 | 区块标题 |
| `--text-h3` | 20px | 18px | 600 | 卡片标题 |
| `--text-body` | 16px | 15px | 400 | 正文 |
| `--text-small` | 14px | 13px | 400 | 辅助说明 |
| `--text-xs` | 12px | 11px | 500 | 标签、徽章 |
| `--text-data` | 24px | 20px | 700 | CombiRank 等关键数据 |

### 行高

- `--leading-tight`: 1.2（标题）
- `--leading-normal`: 1.5（正文）
- `--leading-relaxed`: 1.7（长文）

---

## 3. 间距系统

| Token | 值 | 用途 |
|---|---|---|
| `--space-1` | 4px | 极小间距 |
| `--space-2` | 8px | 紧凑 |
| `--space-3` | 12px | 按钮内边距、图标间距 |
| `--space-4` | 16px | 卡片内边距、小间隙 |
| `--space-5` | 20px | 表单元素间距 |
| `--space-6` | 24px | 区块内部间距 |
| `--space-8` | 32px | 卡片网格间距 |
| `--space-10` | 40px | 大区块间距 |
| `--space-12` | 48px | 区块 padding |
| `--space-16` | 64px | Section 间距 |

---

## 4. 圆角与阴影

| Token | 值 | 用途 |
|---|---|---|
| `--radius-sm` | 4px | 小标签、徽章 |
| `--radius-md` | 8px | 按钮、输入框、小卡片 |
| `--radius-lg` | 12px | 大卡片、面板 |
| `--radius-xl` | 16px | Hero 容器、弹窗 |
| `--radius-full` | 9999px | 胶囊按钮、头像 |
| `--shadow-card` | `0 2px 8px rgba(0,0,0,0.25)` | 卡片 |
| `--shadow-elevated` | `0 8px 24px rgba(0,0,0,0.35)` | 悬浮、下拉 |

---

## 5. 组件规范

### 按钮

**Primary Button**
- 背景：`--accent-primary`
- 文字：`--bg-page`（深色文字在琥珀上）
- 圆角：`--radius-md`
- 内边距：`12px 24px`
- 字体：600，16px
- Hover：`--accent-primary-hover`，translateY(-1px)
- 禁用：opacity 0.5

**Secondary Button**
- 背景：transparent
- 边框：1px solid `--border-default`
- 文字：`--text-primary`
- Hover：背景 `--bg-elevated`

**Ghost Button**
- 背景：transparent
- 文字：`--text-secondary`
- Hover：文字 `--text-primary`

### 卡片

- 背景：`--bg-surface`
- 边框：1px solid `--border-subtle`
- 圆角：`--radius-lg`
- 内边距：`--space-5`（20px）
- Hover：边框变 `--border-default`，轻微阴影

### 输入框 / 选择器

- 背景：`--bg-input`
- 边框：1px solid `--border-default`
- 圆角：`--radius-md`
- 内边距：`12px 16px`
- Focus：边框 `--border-focus`，ring 2px rgba(245,166,35,0.2)
- 占位符：`--text-muted`

### 标签 / Badge

- 圆角：`--radius-full`（胶囊）或 `--radius-sm`
- 内边距：4px 10px（sm），6px 12px（md）
- 字体：500，`--text-xs` 或 `--text-small`
- 类型标签：背景为对应类型色 15% 透明度，文字为类型色

### 结果卡片

- 大卡片展示 Child Pal
- 左侧：几何头像 + 类型色条
- 中部：名称 + CombiRank + 类型标签
- 右侧：分享按钮、查看详情

### 导航栏

- 固定顶部，背景半透明 `--bg-page` + backdrop blur
- 高度：64px
- 边框底部：1px solid `--border-subtle`
- Logo：几何图标 + "PalBreed"
- 链接：默认 `--text-secondary`，hover `--text-primary`
- 移动端：汉堡菜单

### Cookie 横幅

- 固定底部，背景 `--bg-elevated`
- 文字：`--text-secondary`
- 按钮："Accept Analytics"（primary）、"Essential Only"（secondary）
- 链接：Privacy、Cookie Policy

---

## 6. 响应式断点

| 断点 | 宽度 | 说明 |
|---|---|---|
| `--bp-sm` | 640px | 大屏手机 |
| `--bp-md` | 768px | 平板 |
| `--bp-lg` | 1024px | 小桌面 |
| `--bp-xl` | 1280px | 桌面 |

### 布局规则

- 移动优先：默认单列，最大宽度 100%，padding 16px
- md：两列网格
- lg：三列网格，侧边工具入口
- xl：内容最大宽度 1200px，居中

---

## 7. 无障碍

- 所有交互元素有可见 focus 状态
- 颜色不是唯一信息载体（类型图标/文字辅助）
- 按钮/链接有 aria-label
- 表单有 label 关联
- 目标对比度：文字对比度 ≥ 4.5:1，大文字 ≥ 3:1

---

## 8. 反 AI 味检查清单

- [x] 不使用默认 Inter + 紫色渐变 + 三列卡片英雄区
- [x] 深色背景默认，不是白底营销风
- [x] 工具优先，数据密度高
- [x] 使用类型色系统，而不是随机装饰色
- [x] 无官方游戏素材，抽象几何头像
- [x] 字体有目的：Inter 用于 UI，JetBrains Mono 用于数值
