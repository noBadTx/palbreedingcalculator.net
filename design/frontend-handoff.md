# 给鸿胪的交接清单

> 阶段：06-design → 07-frontend  
> 项目：palbreedingcalculator.net  
> 角色：将作（设计）→ 鸿胪（前端）  
> 日期：2026-07-19  
> 状态：06-design [READY FOR HANDOFF]

---

## 1. 核心原则

- **以手工真源为准**：`design/pages/*.html` 是施工图，必须实现
- **Stitch 仅作参考**：`design/stitch/pages/*.html` 是视觉参考，不要直接复用代码
- **设计系统唯一来源**：`design/assets/styles.css` + `design/design-system.md`
- **响应式默认**：移动端优先，断点 `sm:640 / md:768 / lg:1024 / xl:1280`，内容最大宽度 `1200px`

---

## 2. 交付文件位置

```
/root/palbreedingcalculator.net/design/
├── README.md                         # 阶段摘要
├── visual-style-rationale.md         # 视觉方向说明
├── design-system.md                  # 设计系统完整文档
├── frontend-handoff.md               # 本文件
├── stitch-vs-manual.md               # 手工真源 vs Stitch 对照表（可选）
├── assets/
│   ├── styles.css                    # 全局样式、变量、组件类
│   ├── icons.svg                     # 类型图标精灵
│   └── og-image.svg                  # OG 图片模板
├── pages/                            # 手工真源（必须实现）
│   ├── index.html
│   ├── breeding-calculator.html
│   ├── reverse-breeding.html
│   ├── combo-result.html
│   ├── pal-detail.html
│   ├── best-combos.html
│   ├── passive-skills.html
│   ├── about.html
│   ├── sitemap.html
│   ├── privacy.html
│   ├── terms.html
│   ├── cookie-policy.html
│   └── refund-policy.html
└── stitch/pages/                     # Stitch 参考（仅看 layout）
    ├── home.html
    ├── breeding-calculator.html
    ├── reverse-breeding.html
    ├── combo-result.html
    ├── pal-detail.html
    ├── best-combos.html
    ├── passive-skills.html
    ├── about.html
    ├── sitemap.html
    ├── privacy.html
    ├── terms.html
    ├── cookie-policy.html
    └── refund-policy.html
```

---

## 3. 页面优先级与路由

### P0 — 首版必须实现

| 页面 | 路由 | 手工真源文件 | 说明 |
|---|---|---|---|
| 首页 | `/` | `pages/index.html` | Hero + 3 步骤 + 用户画像 + 特性 + FAQ + CTA |
| 前向计算器 | `/breeding-calculator` | `pages/breeding-calculator.html` | 选择父母 → 预测子代 |
| 反向计算器 | `/reverse-breeding` | `pages/reverse-breeding.html` | 选择目标 → 列出所有父母组合 |
| 组合结果 | `/combo/{a}-{b}` | `pages/combo-result.html` | 固定组合 A×B=C 的展示页 |
| Pal 详情 | `/pal/{slug}` | `pages/pal-detail.html` | 某个 Pal 的属性、技能、最佳组合 |
| 隐私政策 | `/privacy` | `pages/privacy.html` | 合规页 |
| 服务条款 | `/terms` | `pages/terms.html` | 合规页 |
| Cookie 政策 | `/cookie-policy` | `pages/cookie-policy.html` | 合规页 |
| 退款政策 | `/refund-policy` | `pages/refund-policy.html` | 合规页 |
| 站点地图 | `/sitemap` | `pages/sitemap.html` | HTML 站点地图 |

### P1 — 可后续迭代

| 页面 | 路由 | 手工真源文件 | 说明 |
|---|---|---|---|
| 最佳组合 | `/best-combos` | `pages/best-combos.html` | 热门组合聚合 |
| 被动技能 | `/passive-skills` | `pages/passive-skills.html` | 被动技能指南 |
| 关于 | `/about` | `pages/about.html` | 关于我们 |

---

## 4. 设计系统速查

| Token | 值 | 用途 |
|---|---|---|
| 背景页 | `#0B0F12` | body 背景 |
| 表面卡片 | `#151A1E` | 卡片、面板 |
| 强调琥珀 | `#F5A623` | 主按钮、CTA、高亮 |
| 强调青绿 | `#4ECDC4` | 成功、标签、数据 |
| 正文 | `#F0F2F5` | 主要文字 |
| 弱化文字 | `#8A9499` | 辅助文字 |
| 错误 | `#E76F51` | 表单错误、警告 |
| 字体正文 | `Inter` | UI、段落 |
| 字体数据 | `JetBrains Mono` | 标签、数值、代码 |
| 圆角主 | `8px` | 按钮、输入框 |
| 圆角卡片 | `12px` | 卡片 |
| 圆角胶囊 | `9999px` | 徽章、标签 |
| 内容最大宽度 | `1200px` | 页面容器 |
| 移动 padding | `16px` | 小屏内边距 |

---

## 5. 组件清单

### 全局
- `Nav`：固定顶部、半透明、logo、链接、移动端汉堡菜单
- `Footer`：logo、资源链接、法律链接、商标声明
- `CookieBanner`：底部固定，Essential Only / Accept Analytics
- `MobileMenu`：全屏抽屉，从汉堡菜单触发

### 首页
- `Hero`：badge + H1 + 副标题 + 两个 CTA
- `StepsCard`：01/02/03 三步骤卡片
- `UseCaseCard`：三种用户画像卡片
- `FeatureCard`：四特性图标卡片
- `FAQ`：手风琴（可静态，也可加 JS）
- `FinalCTA`：居中 CTA 区块

### 工具页
- `CalculatorCard`：选择器 + 计算按钮 + 空态
- `ResultCard`：大头像 + 名称 + 类型标签 + 数据网格 + 操作按钮
- `ResultTable`：反向结果表格
- `ShareButton`：复制 URL
- `RelatedCombos`：相关组合链接

### 详情页
- `PalHeader`：头像 + 名称 + 类型标签
- `StatGrid`：CombiRank / Parent Pairs / Unique Combo
- `WorkSuitabilityList`：工作适应性列表
- `PassiveList`：被动技能标签
- `BestParentsTable`：最佳父母组合表格
- `Breadcrumb`：Home / 父级 / 当前页

---

## 6. 关键状态

| 状态 | 说明 |
|---|---|
| 空态 | 选择器 placeholder，结果区显示提示和图标 |
| 填充态 | 显示结果卡片、表格或详情内容 |
| 加载态 | 按钮 disabled，显示 spinner 或骨架屏 |
| 错误态 | 红色边框 + 错误文字，必须选两个不同 Pal |
| 分享态 | 点击复制 URL，显示 "Copied!"，可接 Web Share API |
| Cookie 状态 | 未同意显示 banner；Essential Only 不加载 GA4；Accept Analytics 加载 GA4 |

---

## 7. 数据与路由

### Pal 对象
```json
{
  "id": "relaxaurus-lux",
  "name": "Relaxaurus Lux",
  "combiRank": 1420,
  "types": ["Water", "Electric"],
  "workSuitability": {
    "handiwork": 2,
    "transporting": 3,
    "generatingElectricity": 3,
    "watering": 3
  },
  "passives": ["lucky", "legend", "serious"],
  "drops": ["pal_fluid", "electric_organ"],
  "isUnique": true
}
```

### Combo 对象
```json
{
  "parentA": "relaxaurus",
  "parentB": "sparkit",
  "child": "relaxaurus-lux",
  "override": true,
  "combiRank": 1420
}
```

### URL 参数
- `/breeding-calculator?a=relaxaurus&b=sparkit`：预填父母并计算
- `/reverse-breeding?target=relaxaurus-lux`：预填目标并计算
- `/pal/{slug}`：Pal 详情
- `/combo/{a}-{b}`：组合结果（a/b 按字母序）

---

## 8. SEO 与元信息

- 每个 indexable 页面：唯一 `H1`、`<title>`、`<meta name="description">`、`<link rel="canonical">`、OG/Twitter 标签、JSON-LD Schema
- 首页：`SoftwareApplication` Schema
- 工具页：`WebApplication` Schema
- Pal 详情：`Article` Schema（可后续增强为 `VideoGame`）
- 组合结果：`WebPage` + `BreadcrumbList`
- 合规页和 sitemap 可 `noindex`
- 内链：开发预览用 `.html`，生产用真实路由路径

---

## 9. 无障碍

- 所有按钮/链接有可见 focus 状态
- 表单 `label` 与 `input/select` 关联
- 图标按钮有 `aria-label`
- 类型信息不能仅靠颜色，必须图标 + 文字
- 手风琴 FAQ：button 有 `aria-expanded`，内容区域有 `aria-hidden`
- 移动端菜单：焦点 trapped，关闭后返回触发按钮

---

## 10. 性能目标

- 首页 LCP < 2.5s（Slow 4G）
- CLS < 0.1
- 首屏 JS 体积 < 50KB（不含数据和字体）
- 字体使用 `display=swap`
- 数据可懒加载或分包，避免阻塞首屏

---

## 11. 版权与合规

- 不使用任何官方 Palworld 图片、模型、图标
- 抽象头像规则：Pal 名称首字母/缩写 + 类型渐变背景
- Footer 必须包含："Palworld is a trademark of Pocketpair, Inc. This fan-made tool is not affiliated with or endorsed by Pocketpair."
- Cookie banner：GA4 仅在同意 Analytics 后加载，Plausible 可默认加载

---

## 12. 手工真源 vs Stitch 参考

| 维度 | 手工真源 | Stitch 参考 |
|---|---|---|
| 位置 | `design/pages/` | `design/stitch/pages/` |
| 文件大小 | 平均 9 KB | 平均 21 KB |
| 样式系统 | 统一 CSS 变量 | Tailwind CDN 零散类 |
| 响应式 | 完整断点系统 | 依赖 Tailwind 类 |
| 代码质量 | 可控、可维护 | 装饰代码多、冗余 |
| 截图 | 无 | 尺寸异常，不可作为视觉依据 |
| 用途 | **实现依据** | **布局/视觉参考** |

**结论**：前端实现以手工真源为准，Stitch 仅用于拿不准布局时打开参考。

---

## 13. 待确认项

- [ ] 真实 Pal 数据文件位置和加载方式（JSON 内联 / 静态文件 / API）
- [ ] 是否需要实现 FAQ 手风琴 JS 动画
- [ ] 是否接入 Web Share API
- [ ] v0 搜索/筛选用原生 select 还是简单 autocomplete
- [ ] 是否加入 light/dark 切换（建议 v0 默认 dark）
- [ ] 部署平台（Cloudflare Pages / Vercel / 其他）

---

## 14. 快速验证清单

实现后可按此检查：

- [ ] 所有 P0 页面在 `/` 和对应路由可访问
- [ ] 移动端 375px 下无水平滚动、按钮可点
- [ ] 桌面端 1280px+ 布局正常，内容不溢出
- [ ] 每个页面有唯一 H1、title、description、canonical
- [ ] Cookie banner 在未同意时显示，同意后写入 localStorage
- [ ] 计算器表单空态、填充态、错误态都有样式
- [ ] 所有按钮、链接 focus 状态可见
- [ ] 分享按钮复制 URL 正确
- [ ] 页面间导航链接完整
- [ ] 无官方 Palworld 素材

---

**下一步：鸿胪确认收到清单后，即可进入 07-frontend 实现。**
