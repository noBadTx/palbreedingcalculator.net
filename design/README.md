# Palworld Breeding Calculator — 06-design 交接摘要

## 当前结论
- **状态**：[NEEDS_REVIEW]
- **一句话结论**：采用战术终端风（深色默认、类型色编码、几何抽象头像），已完成所有 P0 页面 + P1 聚合内容页的 HTML/CSS 真源、设计系统、图标资产和前端 handoff；Stitch 自动生成首页作为视觉参考，但截图尺寸异常，需以手工真源为主。

---

## 输入来源
- **上游阶段**：02-product → 04-pricing → 05-copy
- **关键材料**：
  - `/root/palworld-breeding-calculator-prd.md`（PRD v1）
  - `/root/.hermes/media/palworld-copy-freeze.md`（SEO 文案冻结）
  - `/root/palbreedingcalculator.net/compliance/`（隐私、条款、Cookie、退款政策）
- **待确认项**：
  - 真实搜索量 / Keyword Difficulty（PRD 已标）
  - 数据维护来源与更新机制（PRD 已标）
  - 是否接入 affiliate 及具体链接/文案
  - 真实社交证明数据
  - 是否实现 light/dark 切换（v0 默认 dark）

---

## 本阶段交付物

### 1. 设计方向
- `visual-style-rationale.md`：对比 3 种风格，选定战术终端风，阐述设计原则、颜色、字体、情绪板

### 2. 设计系统
- `design-system.md`：完整颜色、字体、间距、圆角、阴影、组件、响应式、无障碍
- `assets/styles.css`：全局 CSS 变量和工具类，可直接用于前端实现

### 3. 图标与资产
- `assets/icons.svg`：类型图标（9 种）+ 工具图标（share/copy/search/check/arrow/menu/close）+ logo
- `assets/og-image.svg`：Open Graph 图片模板（1200×630）

### 4. 页面 HTML 真源（P0 + P1）
- `pages/index.html` — 首页
- `pages/breeding-calculator.html` — 前向计算器
- `pages/reverse-breeding.html` — 反向计算器
- `pages/pal-detail.html` — Pal 详情页（示例：Relaxaurus Lux）
- `pages/combo-result.html` — 组合结果页（示例：Relaxaurus × Sparkit）
- `pages/best-combos.html` — 热门组合聚合页
- `pages/passive-skills.html` — 被动技能指南
- `pages/about.html` — 关于页
- `pages/privacy.html` — 隐私政策
- `pages/terms.html` — 服务条款
- `pages/cookie-policy.html` — Cookie 政策
- `pages/refund-policy.html` — 退款政策
- `pages/sitemap.html` — HTML 站点地图

### 5. 前端 Handoff
- `frontend-handoff.md`：组件清单、交互状态、数据契约、SEO 注意事项、性能目标、无障碍要求

### 6. Stitch 参考
- `stitch/index.html` — Stitch 自动生成的首页 HTML
- `stitch/screenshot.png` — Stitch 生成的截图（尺寸 32×512，异常，仅供参考）
- `stitch/metadata.json` — Stitch 项目与屏幕 ID

---

## 核心判断

1. **视觉方向**：采用深色战术终端风，而非官方游戏风或通用 SaaS 风。理由：规避版权、符合工具定位、与竞品差异化。
2. **无官方素材**：全部使用抽象几何头像 + 首字母色块，Footer 明确商标声明。
3. **移动端优先**：按钮大、选择器触屏友好、单列→多列响应式。
4. **数据密度优先**：工具页结果卡片直接展示 CombiRank、类型、父母、分享按钮。
5. **Stitch 仅作参考**：Stitch 生成的 HTML 使用 Tailwind CDN，但我们的 HTML/CSS 真源更完整且可还原，故以真源为主。

---

## 已确认项
- 深色模式为默认（v0）
- 类型色系统 9 种
- 主字体 Inter + 数据字体 JetBrains Mono
- 不使用官方 Palworld 素材
- 所有 indexable 页面有唯一 H1、Title、Meta、Canonical、OG、Schema
- Cookie 横幅 Essential / Analytics 两档
- 工具页包含空态和填充态
- 合规页面从 `compliance/` 自动生成

---

## 风险分级

### P0
- **数据准确性**：Pal 数据、CombiRank、unique combos 需随游戏更新维护，数据错误直接影响工具可信度。
- **版权/商标**：虽然规避官方素材，但 Pal 名称和类型仍属 Pocketpair，需保留商标声明且不冒充官方。

### P1
- **Stitch 截图异常**：生成的截图 32×512 不符合正常网页截图，无法直接用于展示。HTML 真源可替代。
- **SEO 文案状态**：copy-freeze 仍为 [NEEDS_REVIEW]，上线前需最终确认社交证明、affiliate 文案。

### P2
- **视觉验收**：当前为手工真源，后续若接入 Stitch 自动设计，需补充真实移动设备截图。
- **多语言/Path Finder/被动技能筛选**：P1 功能未做完整设计，后续需单独迭代。

---

## 给下一阶段（07-frontend）的最小必要信息

### 必须读取
- `design-system.md`
- `assets/styles.css`
- `frontend-handoff.md`
- `pages/*.html`（尤其 index.html、breeding-calculator.html、reverse-breeding.html）
- PRD 第 7-13 节（功能范围、验收标准）

### 不能改动（除非重新走设计评审）
- 颜色系统 token 名称和值
- 页面 H1 / Title / Meta Description（来自 copy-freeze）
- 类型色编码
- 不使用官方素材的原则
- 合规页内容

### 建议启动 Prompt
```text
你现在执行 palbreedingcalculator.net 的前端实现阶段（07-frontend）。
上游输入位于 /root/palbreedingcalculator.net/design/。
请按 frontend-handoff.md 实现所有 P0 页面，使用 assets/styles.css 作为设计系统。
技术栈：静态 HTML + 原生 JS + Cloudflare Pages（或团队指定栈）。
要求：
1. 每个 indexable 页面有唯一 H1、title、meta、canonical、OG、JSON-LD。
2. 工具页实现前向/反向计算交互（可用 mock 数据）。
3. Cookie 横幅：Essential Only 和 Accept Analytics 两档，GA4 仅在同意后加载。
4. 不引用官方 Palworld 素材。
5. 移动端优先，LCP < 2.5s，CLS < 0.1。

输出：生产就绪代码 + 关键页面截图 + 性能自查清单。
```

---

## 质量门槛自检

- [x] 设计是真源，不是单张概念图（HTML/CSS + 变量）
- [x] 前端可提取字体/颜色/间距/图标（assets/styles.css）
- [x] 关键交互状态齐全：空态、填充态、错误态、加载态、Cookie 状态
- [x] 视觉和上一个项目不撞脸（战术终端风，非通用 SaaS）
- [x] 无 Stitch 时仍产出完整 HTML/CSS 真源 + 前端 handoff
- [x] 所有 indexable 路由有 HTML 真源
- [x] 每个页面有唯一 H1、Title、Meta、Canonical、OG
- [x] 工具页包含空态和填充态
- [x] 移动端响应式已覆盖
- [x] 未使用官方/版权素材
- [x] 前端 handoff 包含组件清单、数据契约、SEO 注意事项
- [ ] Stitch 自动出图正常通过（截图尺寸异常，需复核）
- [ ] 真实移动设备截图（需前端实现后补充）

---

**[NEEDS_REVIEW]**
