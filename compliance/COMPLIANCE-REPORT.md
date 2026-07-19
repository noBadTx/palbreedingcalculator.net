# Palworld Breeding Calculator — 合规定稿报告

## 1. 基本信息

- 项目：Palworld Breeding Calculator
- 域名：**palbreedingcalculator.net**
- 运营主体：**qiufeng**
- 司法管辖区：**用户所在司法管辖区（the jurisdiction where you are located）**
- 目标市场：US / Global English
- 站点类型：工具型静态站点
- 当前阶段：04-compliance
- 状态：**DONE**
- 审查人：廷尉
- 日期：2026-07-18

---

## 2. 最终确认项

| 项目 | 确认内容 |
|---|---|
| 域名 | palbreedingcalculator.net |
| 运营主体 | qiufeng |
| 地区 | 用户所在司法管辖区（the jurisdiction where you are located） |
| 联系邮箱 | hello@palbreedingcalculator.net |
| Analytics | Plausible + Google Analytics 4 |
| Affiliate | 暂不接入 |
| 数据更新 | 7 天内同步 major patch |

---

## 3. 关键变化

- **GA4 接入**：因使用 Google Analytics 4，必须提供 **Cookie 同意横幅**。
- **Cookie Policy 必需**：已从“建议保留占位”升级为 **必须上线**。
- **司法管辖区已确认**：Privacy / Terms 已写入 "the jurisdiction where you are located"。
- **运营主体已确认**：全部文档抬头已改为 `qiufeng`。

---

## 4. 数据清单（最终）

### 4.1 不收集的数据

- 姓名、邮箱、电话
- 支付信息
- 游戏账号数据
- 用户上传内容
- 用户账号/密码

### 4.2 收集的数据

| 数据类型 | 来源 | 目的 | 是否依赖 Cookie |
|---|---|---|---|
| IP 地址 | Cloudflare / 托管商 | 安全、运营、故障排查 | 否 |
| 浏览器 UA | Cloudflare / 托管商 | 兼容性、安全 | 否 |
| 页面访问路径 | Plausible / GA4 | 流量分析 | GA4 是，Plausible 否 |
| 会话/用户标识 | GA4 | 用户行为分析 | 是 |
| 匿名聚合统计 | Plausible | 产品改进 | 否 |

---

## 5. 第三方服务清单（最终）

| 服务 | 用途 | 是否使用 Cookie | 披露位置 |
|---|---|---|---|
| Cloudflare Pages | 托管/CDN | 否 | Privacy Policy |
| Plausible Analytics | 匿名流量分析 | 否 | Privacy Policy + Cookie Policy |
| Google Analytics 4 | 流量与用户行为分析 | 是 | Privacy Policy + Cookie Policy |

---

## 6. 风险等级（最终）

### P0 — 无

### P1 — 已处理

| 风险 | 处理方案 |
|---|---|
| GA4 使用 Cookie | 已增加 Cookie Policy + Cookie 同意横幅 |
| 第三方数据披露 | 已在 Privacy Policy 中完整列出 |
| 商标免责声明 | 已在 Terms 和 About 中声明 |

### P2 — 可后续优化

| 风险 | 处理方案 |
|---|---|
| Refund Policy 当前无支付 | 保留占位 |
| 数据准确性免责声明 | 已在 Terms 中声明 |
| DMCA/纠错流程 | 在 About 页提供反馈邮箱 |

---

## 7. 必需合规页面（最终）

| 页面 | 路由 | 状态 |
|---|---|---|
| Privacy Policy | `/privacy` | 必需 |
| Terms of Service | `/terms` | 必需 |
| Cookie Policy | `/cookie-policy` | 必需（因 GA4） |
| Refund Policy | `/refund-policy` | 建议保留占位 |
| About / Disclaimer | `/about` | 必需，含商标免责声明 |

---

## 8. 上线 Checklist（最终）

| 检查项 | 状态 |
|---|---|
| `/privacy` 页面已上线 | 待完成 |
| `/terms` 页面已上线 | 待完成 |
| `/cookie-policy` 页面已上线 | 待完成 |
| `/refund-policy` 页面已上线 | 待完成 |
| `/about` 页面含商标免责声明 | 待完成 |
| Footer 含 Privacy / Terms / Cookie / Refund / About 链接 | 待完成 |
| 已部署 Cookie 同意横幅（支持 Essential / Analytics 两档） | 待完成 |
| GA4 仅在用户同意 Analytics 后加载 | 待完成 |
| Plausible 在首次页面加载时即可加载（不依赖 Cookie） | 待完成 |
| 未使用官方 Palworld 美术素材 | 已确认 |
| 无登录/注册/支付 | 已确认 |
| 无 Affiliate | 已确认 |
| 联系邮箱 `hello@palbreedingcalculator.net` 已配置转发 | 待完成 |
| 数据更新机制与最后更新时间展示 | 待完成 |

---

## 9. 文件交付

以下文件已生成，可直接交给前端/设计团队：

- `/root/palbreedingcalculator.net/compliance/privacy.md`
- `/root/palbreedingcalculator.net/compliance/terms.md`
- `/root/palbreedingcalculator.net/compliance/cookies.md`
- `/root/palbreedingcalculator.net/compliance/refund.md`

所有文件需替换 `[上线日期]` 为实际上线日期。

---

## 10. Cookie 同意横幅建议文案

```
We use cookies to improve your experience and analyze traffic.
Essential cookies are always on. Analytics cookies help us understand how the site is used.

[Accept All] [Essential Only] [Cookie Settings]
```

点击 **Cookie Settings** 后显示：

- [x] Essential (required)
- [ ] Analytics (Plausible + Google Analytics 4)

只有用户勾选 Analytics 后，才加载 GA4 脚本。Plausible 可默认加载（不使用 Cookie）。

---

## 11. 当前结论

- **状态**：**DONE**
- **一句话结论**：域名、运营主体、司法管辖区、Analytics 方案已确认，合规文件已生成。因使用 GA4，必须上线 Cookie Policy 和 Cookie 同意横幅；其他合规风险低。
- **上线前必须完成**：部署 4 个法律页、Cookie 横幅、邮箱转发配置、数据更新展示。

---

## 12. 下游交接

- **下一阶段**：前端实现 / 设计 / QA 验收
- **必须读取**：本报告、4 个合规 Markdown 文件、PRD v1、文案冻结 v1
- **不能改动**：Privacy/Terms/Cookie 中的数据披露口径、运营主体、司法管辖区、第三方服务列表
- **关键前置**：
  1. 配置 `hello@palbreedingcalculator.net` 邮件转发
  2. 上线 Cookie 同意横幅
  3. 确保 GA4 仅在用户同意 Analytics 后加载

---

**[DONE]**
