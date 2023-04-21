import { merge } from '../helper';

merge(
    /.*/,
    undefined,
    {
        'Front Page': '首页',
        Watched: '订阅',
        Popular: '热门',
        Torrents: '种子',
        Favorites: '收藏',
        'My ': '我的',
        Home: '主页',
        Uploads: '上传',
        Toplists: '排行',
        Bounties: '悬赏',
        News: '新闻',
        Forums: '论坛',
        Wiki: '维基',

        Overview: '概况',
        'My Stats': '我的统计',
        'My Settings': '我的设置',
        'My Tags': '我的标签',
        Stats: '统计',
        Settings: '设置',
        Tags: '标签',
        Donations: '捐赠',
        'Hath Exchange': 'Hath 交易',
        'GP Exchange': 'GP 交易',
        'Credit Log': 'Credit 记录',
        'Karma Log': 'Karma 记录',

        'Visit the E-Hentai Forums': '访问 E-Hentai 论坛',
        'Play the HentaiVerse Minigame': '玩 HentaiVerse 小游戏',
        'Lo-Fi Version': '低保真版',
        'Terms of Service': '服务条款',
        Advertise: '广告',
        Onion: '洋葱网址',

        'E-Hentai Galleries: The Free Hentai Doujinshi, Manga and Image Gallery System':
            'E-Hentai: 一个免费的绅士同人志、漫画和图像的图库系统',
        'Now With Layers': '有了洋葱网址',

        Doujinshi: '同人志',
        Manga: '漫画',
        'Artist CG': '画师CG',
        'Game CG': '游戏CG',
        Western: '西方',
        'Non-H': '无H',
        'Image Set': '图集',
        'Asian Porn': '亚洲色情',
        Misc: '杂项',
        Private: '私有',

        'Search Keywords': '搜索关键词',
        Search: '搜索',
        Clear: '清除',

        'Show Advanced Options': '显示高级选项',
        'Hide Advanced Options': '隐藏高级选项',
        ' Browse Expunged Galleries': '只显示已删除的图库',
        ' Require Gallery Torrent': '只显示有种子的图库',
        'Between ': '介于 ',
        ' and ': ' 和 ',
        ' pages': ' 页',
        'Minimum Rating: ': '最低评分：',
        'Any Rating': '无限制',
        '2 Stars': '2 星',
        '3 Stars': '3 星',
        '4 Stars': '4 星',
        '5 Stars': '5 星',
        'Disable custom filters for:': '禁用自定义过滤器：',
        ' Language': ' 语言',
        ' Uploader': ' 上传者',
        ' Tags': ' 标签',

        'Show File Search': '显示文件搜索',
        'Hide File Search': '隐藏文件搜索',
        'Select a file to upload, then hit File Search. All public galleries containing this exact file will be displayed.':
            '请选择要搜索的图像文件后点击“文件搜索”。将列出包含此文件的所有公开图库。',
        'File Search': '文件搜索',
        'For color images, the system can also perform a similarity lookup to find resampled images.':
            '对于彩色图像，系统还可以执行相似性查询以找到重采样过的图像。',
        ' Use Similarity Scan': ' 使用相似性查询',
        ' Only Search Covers': ' 仅搜索封面',

        'The keyword ': '关键词 ',
        ' is short and will be searched as an exact tag only.': ' 太短，因此只会搜索精确匹配的标签。',
        'The term ': '关键词 ',
        ' uses unsupported syntax or is otherwise not valid.': ' 无效或使用了不支持的语法。',
        'The provided date is invalid or outside the range of posted galleries.':
            '提供的日期无效或超出已发布图库的日期范围。',
        'The page range minimum cannot be above 1000.': '页数最小值最多为 1000。',
        'The page range maximum cannot be below 10.': '页数最大值至少为 10。',
        'Your page range filter is too narrow.': '页数范围差至少为 20。',
        'You provided too many keywords. Use fewer keywords, or combine keywords with quotes. (Ignored ':
            '使用的关键词过多。请减少关键词或使用引号组合关键词。(已忽略 ',
        'No hits found': '什么也没有',
        'No unfiltered results found.': '没有未过滤的结果',
        'Disable Filters': '禁用过滤器',

        '<< First': '<< 首页',
        '< Prev': '< 上一页',
        '< Jump': '< 跳页',
        '< Seek': '< 搜寻',
        'Jump/Seek': '跳页/搜寻',
        'Seek >': '搜寻 >',
        'Jump >': '跳页 >',
        'Next >': '下一页 >',
        'Last >>': '末页 >>',
        'date or offset': '日期或偏移量',
        'Enter a year or date in YYYY, (YY)YY-MM or (YY)YY-MM-DD format to seek to, or the number of days to jump backwards or forwards, or a number followed by w, m and y to jump weeks, months or years respectively.':
            '请输入要跳转的年份或日期，格式为 YYYY，(YY)YY-MM 或 (YY)YY-MM-DD；\r或者输入要向前或向后跳转的天数，输入数字后可以加 w，m，y 分别跳转周，月，年',
        'Set the date to seek from or to.': '设置要跳转的日期',
        'Use Date Selector': '日期选择器',

        Minimal: '最小化',
        'Minimal+': '最小化 + 关注标签',
        Compact: '紧凑 + 标签',
        Extended: '扩展',
        Thumbnail: '缩略图',

        Published: '发布时间',
        Title: '标题',
        Uploader: '上传者',

        'reclass:': '重新分类：',
        'language:': '语言：',
        'parody:': '原作：',
        'character:': '角色：',
        'group:': '社团：',
        'artist:': '艺术家：',
        'cosplayer:': 'Coser：',
        'female:': '女性：',
        'male:': '男性：',
        'mixed:': '混合：',
        'other:': '其他：',
        'temp:': '临时：',
        '(Disowned)': '(已放弃)',
        'No torrents available': '无可用种子',
        'Show torrents': '查看种子',

        'It is the dawn of a new day!': '新的一天开始了！',
        'Reflecting on your journey so far, you find that you are a little wiser.':
            '回想一下你迄今为止的旅程，你发现你更聪明了。',
        'You gain ': '你获得了 ',
        ' EXP, ': ' 经验，',
        ' Credits, ': ' Credits，',
        ' Credits!': ' Credits！',
        ' Credits and ': ' Credits 和 ',
        ' GP!': ' GP！',
        ' GP and ': ' GP 和 ',
        ' Hath!': ' Hath！',

        'You have encountered a monster!': '你遇到了怪物！',
        'Click here to fight in the HentaiVerse.': '点击此处进入 HentaiVerse 战斗',

        'Favorites 0': '收藏夹 0',
        'Favorites 1': '收藏夹 1',
        'Favorites 2': '收藏夹 2',
        'Favorites 3': '收藏夹 3',
        'Favorites 4': '收藏夹 4',
        'Favorites 5': '收藏夹 5',
        'Favorites 6': '收藏夹 6',
        'Favorites 7': '收藏夹 7',
        'Favorites 8': '收藏夹 8',
        'Favorites 9': '收藏夹 9',

        'Create New': '新建',
        Rename: '重命名',
        Cancel: '取消',
        Close: '关闭',
        Confirm: '确定',
        Save: '保存',
        None: '无',
        Yes: '是',
        No: '否',
        'No (Private)': '否 (私有)',
        'No (Expunged)': '否 (已删除)',
        'No (Deleted)': '否 (已移除)',
        'No (Replaced)': '否 (已替换)',

        'The site is currently in Read Only/Failover Mode. Some functionality will not be available. Details may be available on ':
            '网站当前处于只读/故障转移模式，部分功能会不可用。详情请关注 ',
        'The site is currently in Read Only Mode. This page is therefore not available.':
            '网站当前处于只读模式，因此本页面不可用。',
        'This content is not available in Russia.RU': '此内容在俄罗斯 (RU) 不可用',
    },
    [
        [/^(\d+) pages?$/, '$1 页'],
        [/^Found about ([\d,]+) results?./, '找到约 $1 个结果。'],
        [/^Found ([\d,]+\+?) results?./, '找到 $1 个结果。'],
        [/^Found hundreds of results./, '找到数百结果。'],
        [/^Found thousands of results./, '找到数千结果。'],
        [/^Found many results./, '找到许多结果。'],
        [/\s?Filtered ([\d,]+) galler(ies|y) from this page.\s?/, '已从此页面过滤 $1 个结果。'],
        [/\s?Excluded ([\d,]+) galler(ies|y) from this page.\s?/, '已从此页面排除 $1 个结果。'],
        [
            /\s?Excluded ([\d,]+) galler(ies|y) and filtered ([\d,]+) galler(ies|y) from this page.\s?/,
            '已从此页面排除 $1 个结果，过滤 $3 个结果。',
        ],
    ],
);
