# AI行业洞察每日汇总网站

一个现代化的AI行业洞察每日汇总网站，提供六大核心领域的最新动态摘要。

## 功能特点

- 📊 **六大核心板块**：全面覆盖AI领域关键动态
  - 人工智能企业动态
  - 智能体（AI Agent）应用落地
  - 半导体行业动态
  - GPU与算力发展
  - AI算法研究前沿
  - 人工智能专家动态（新增）

- 📝 **结构化展示**：清晰的分点列项形式呈现
- 🎯 **重点标注**：重要信息自动高亮显示
- 📱 **响应式设计**：完美适配桌面和移动设备
- 🔄 **实时更新**：支持API接口更新数据

## 技术栈

### 后端
- **Flask** - Python Web框架
- **JSON** - 数据存储格式

### 前端
- **HTML5** - 页面结构
- **CSS3** - 现代化样式设计
- **JavaScript** - 交互逻辑

## 项目结构

```
ai_insights/
├── app.py                 # Flask后端应用
├── requirements.txt       # Python依赖包
├── README.md             # 项目说明文档
├── templates/            # HTML模板
│   └── index.html        # 主页面
├── static/               # 静态资源
│   ├── css/
│   │   └── style.css     # 样式文件
│   └── js/
│       └── main.js       # JavaScript文件
└── data/                 # 数据目录
    └── insights.json     # 洞察数据（自动创建）
```

## 安装步骤

### 1. 进入项目目录

```bash
cd /home/ubuntu/ai_insights
```

### 2. 安装依赖

```bash
pip install -r requirements.txt
```

或使用conda环境：

```bash
conda create -n ai_insights python=3.10
conda activate ai_insights
pip install -r requirements.txt
```

### 3. 运行应用

```bash
python app.py
```

应用将在 `http://0.0.0.0:5000` 启动。

### 4. 访问网站

在浏览器中打开：
- 本地访问：`http://localhost:5000`
- 网络访问：`http://你的服务器IP:5000`

## 数据格式

数据存储在 `data/insights.json` 文件中，格式如下：

```json
{
  "date": "2024年01月01日",
  "sections": {
    "enterprise_ai": {
      "title": "人工智能企业动态",
      "icon": "🤖",
      "items": [
        {
          "title": "进展标题",
          "description": "详细描述",
          "who": "相关公司/个人",
          "impact": "影响数据",
          "date": "2024-01-01",
          "source": "来源",
          "highlight": true
        }
      ]
    }
  }
}
```

## API接口

### 获取洞察数据
- **URL**: `/api/insights`
- **方法**: `GET`
- **返回**: JSON格式的洞察数据

### 更新洞察数据
- **URL**: `/api/insights`
- **方法**: `POST`
- **参数**: JSON格式的数据
- **返回**: 更新结果

### 健康检查
- **URL**: `/api/health`
- **方法**: `GET`
- **返回**: 服务状态

## 自定义数据

可以通过以下方式更新数据：

1. **手动编辑JSON文件**：编辑 `data/insights.json` 文件
2. **通过API更新**：使用POST请求更新数据
3. **修改代码**：在 `app.py` 中修改 `DEFAULT_INSIGHTS` 变量

## 输出格式说明

每个洞察项包含以下信息：

- **标题**：简洁的标题式陈述
- **描述**：详细的事件描述
- **影响**：关键数据或影响
- **来源**：信息来源（公司、研究机构等）
- **日期**：事件发生时间
- **重点标注**：重要信息会高亮显示

## 注意事项

- 首次运行会自动创建 `data/insights.json` 文件（使用默认示例数据）
- 数据文件使用UTF-8编码
- 建议定期备份数据文件

## 扩展功能

可以进一步扩展的功能：

1. **数据爬取**：集成新闻爬虫自动获取最新动态
2. **搜索功能**：添加关键词搜索
3. **分类筛选**：按领域或重要性筛选
4. **导出功能**：支持PDF/Excel导出
5. **邮件订阅**：每日推送摘要邮件
6. **RSS订阅**：提供RSS feed

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request！

