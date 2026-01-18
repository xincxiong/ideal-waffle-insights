// AI行业洞察每日汇总网站 - 前端交互逻辑

document.addEventListener('DOMContentLoaded', function() {
    console.log('AI行业洞察每日汇总网站已加载');
    
    // 日期选择器功能
    const datePicker = document.getElementById('datePicker');
    const todayBtn = document.getElementById('todayBtn');
    const currentDateDisplay = document.getElementById('currentDateDisplay');
    
    // 初始化日期选择器
    if (datePicker) {
        // 如果没有设置值，使用今天的日期
        if (!datePicker.value) {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            datePicker.value = `${year}-${month}-${day}`;
        }
        
        // 日期选择器变化事件
        datePicker.addEventListener('change', function() {
            const selectedDate = this.value;
            if (selectedDate) {
                loadDataByDate(selectedDate);
            }
        });
        
        // 设置最大日期为今天（不能选择未来日期）
        const today = new Date();
        const maxDate = today.toISOString().split('T')[0];
        datePicker.setAttribute('max', maxDate);
    }
    
    // "今天"按钮点击事件
    if (todayBtn) {
        todayBtn.addEventListener('click', function() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const todayStr = `${year}-${month}-${day}`;
            
            if (datePicker) {
                datePicker.value = todayStr;
            }
            loadDataByDate(todayStr);
        });
    }
    
    // 根据日期加载数据（直接刷新页面）
    function loadDataByDate(dateStr) {
        window.location.href = `/?date=${dateStr}`;
    }
    
    // 浏览器前进/后退按钮支持
    window.addEventListener('popstate', function(event) {
        const urlParams = new URLSearchParams(window.location.search);
        const date = urlParams.get('date');
        if (date && datePicker) {
            datePicker.value = date;
            loadDataByDate(date);
        }
    });
    
    // 为每个洞察项添加动画效果
    const insightItems = document.querySelectorAll('.insight-item');
    insightItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // 目录导航链接的平滑滚动
    document.querySelectorAll('.toc-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                // 计算偏移量（考虑固定的目录导航栏高度）
                const toc = document.getElementById('toc');
                const offset = toc ? toc.offsetHeight + 20 : 80;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // 更新活动状态
                updateActiveTocLink(this);
            }
        });
    });
    
    // 更新活动目录链接
    function updateActiveTocLink(activeLink) {
        document.querySelectorAll('.toc-link').forEach(link => {
            link.classList.remove('active');
        });
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // 滚动时自动高亮当前section的目录链接
    function highlightTocOnScroll() {
        const sections = document.querySelectorAll('.insight-section');
        const toc = document.getElementById('toc');
        const offset = toc ? toc.offsetHeight + 100 : 100;
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - offset && 
                window.pageYOffset < sectionTop + sectionHeight - offset) {
                current = section.getAttribute('id');
            }
        });
        
        if (current) {
            const activeLink = document.querySelector(`.toc-link[href="#${current}"]`);
            if (activeLink && !activeLink.classList.contains('active')) {
                updateActiveTocLink(activeLink);
            }
        }
    }
    
    // 监听滚动事件
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                highlightTocOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // 页面加载时高亮当前section
    highlightTocOnScroll();

    // 高亮重要内容
    const highlightItems = document.querySelectorAll('.insight-item.highlight');
    highlightItems.forEach(item => {
        // 添加闪烁动画提示
        const badge = item.querySelector('.badge');
        if (badge) {
            badge.style.animation = 'pulse 2s infinite';
        }
    });
});

// CSS动画定义（通过JavaScript添加）
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(style);
