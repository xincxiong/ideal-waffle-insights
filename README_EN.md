# AI Industry Insights Daily Summary Website

A modern AI industry insights daily summary website that provides the latest dynamic summaries across six core areas.

## Features

- 📊 **Six Core Sections**: Comprehensive coverage of key AI domain dynamics
  - Enterprise AI Dynamics
  - AI Agent Applications
  - Semiconductor Industry News
  - Computing Power & Policy
  - AI Algorithm Research Frontiers
  - AI Expert Dynamics (newly added)

- 📝 **Structured Display**: Clear bullet-point format presentation
- 🎯 **Key Highlights**: Important information automatically highlighted
- 📱 **Responsive Design**: Perfect adaptation for desktop and mobile devices
- 🔄 **Real-time Updates**: API interface support for data updates
- 📅 **Date Selection**: Browse insights by date with automatic content generation
- 🔍 **Dynamic Content Retrieval**: Automatic content retrieval for different date selections

## Technology Stack

### Backend
- **Flask** - Python Web framework
- **JSON** - Data storage format
- **Requests** - HTTP request library (for expert search)
- **BeautifulSoup4** - HTML parsing library

### Frontend
- **HTML5** - Page structure
- **CSS3** - Modern professional styling
- **JavaScript** - Interactive logic

## Project Structure

```
ai_insights/
├── app.py                 # Flask backend application
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation (Chinese)
├── README_EN.md          # Project documentation (English)
├── templates/            # HTML templates
│   └── index.html        # Main page
├── static/               # Static resources
│   ├── css/
│   │   └── style.css     # Stylesheet
│   └── js/
│       └── main.js       # JavaScript file
└── data/                 # Data directory
    └── insights_YYYY-MM-DD.json  # Date-specific data files
```

## Installation Steps

### 1. Clone or Download Project

```bash
cd /home/ubuntu/ai_insights
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

Or using conda environment:

```bash
conda create -n ai_insights python=3.10
conda activate ai_insights
pip install -r requirements.txt
```

### 3. Run Application

```bash
python app.py
```

The application will start at `http://0.0.0.0:5000` (or automatically find an available port).

### 4. Access Website

Open in browser:
- Local access: `http://localhost:5000`
- Network access: `http://your-server-ip:5000`

## Usage

1. **Date Selection**: Click the date picker at the top or use the "Today" button to select a date
2. **Automatic Updates**: The page automatically refreshes to display content for the selected date
3. **Content Retrieval**: Each section displays content related to the selected date
4. **Navigation**: Use the table of contents to quickly jump to different sections

## Data Format

Data is stored in `data/insights.json` or `data/insights_YYYY-MM-DD.json` files in the following format:

```json
{
  "date": "2024年01月01日",
  "sections": {
    "enterprise_ai": {
      "title": "Enterprise AI Dynamics",
      "icon": "🤖",
      "items": [
        {
          "title": "Progress Title",
          "description": "Detailed description",
          "who": "Related Company/Individual",
          "impact": "Impact data",
          "date": "2024-01-01",
          "source": "Source",
          "highlight": true
        }
      ]
    }
  }
}
```

## API Endpoints

### Get Insights Data
- **URL**: `/api/insights`
- **Method**: `GET`
- **Parameters**: `?date=YYYY-MM-DD` (optional)
- **Returns**: JSON format insights data

### Update Insights Data
- **URL**: `/api/insights`
- **Method**: `POST`
- **Parameters**: JSON format data
- **Returns**: Update result

### Get Available Dates
- **URL**: `/api/dates`
- **Method**: `GET`
- **Returns**: List of available dates

### Health Check
- **URL**: `/api/health`
- **Method**: `GET`
- **Returns**: Service status

## Customizing Data

You can update data through the following methods:

1. **Manual JSON Editing**: Edit `data/insights.json` or date-specific files
2. **API Update**: Use POST request to update data
3. **Code Modification**: Modify `DEFAULT_INSIGHTS` variable in `app.py`

## Key Features

### Date-based Content Generation

- **Automatic Generation**: When selecting a date, content is automatically generated if no data file exists
- **Content Consistency**: Same date generates consistent content using hash-based seeding
- **Content Variation**: Different dates generate different content

### Dynamic Content Retrieval

- **Section-based Retrieval**: Each section retrieves content related to the selected date
- **Expert Search**: The sixth section (AI Experts) actively searches for expert information
- **Date Filtering**: Other sections filter content within ±3 days of the selected date

### Content Display

- **Latest First**: Content sorted by date (newest first)
- **Limited Display**: Maximum 8 items per section (5-8 item range)
- **Highlighting**: Important items automatically highlighted

## Output Format Description

Each insight item contains the following information:

- **Title**: Concise title statement
- **Description**: Detailed event description
- **Impact**: Key data or impact
- **Source**: Information source (company, research institution, etc.)
- **Date**: Event occurrence time
- **Highlight**: Important information highlighted

## Notes

- First run automatically creates `data/insights.json` with example data
- Data files use UTF-8 encoding
- Regular backup of data files recommended
- Date selection automatically triggers content retrieval and generation

## Troubleshooting

### Port Already in Use

If port 5000 is occupied, the application automatically finds the next available port (5001, 5002, etc.).

You can also manually specify a port:
```bash
python app.py 8080
```

### Dependencies Installation Failed

If some packages fail to install, try:
```bash
pip install --upgrade pip
pip install -r requirements.txt --no-cache-dir
```

## Extended Features

Future extensible features:

1. **Data Crawling**: Integrate news crawlers to automatically fetch latest updates
2. **Search Function**: Add keyword search
3. **Category Filtering**: Filter by domain or importance
4. **Export Function**: Support PDF/Excel export
5. **Email Subscription**: Daily summary email push
6. **RSS Feed**: Provide RSS feed subscription

## License

MIT License

## Contributing

Welcome to submit Issues and Pull Requests!

## Contact

For questions or suggestions, please submit an Issue or contact the maintainers.

