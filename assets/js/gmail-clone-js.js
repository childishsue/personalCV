const { createApp, ref, computed } = Vue

createApp({
    setup() {
        // 模式切換
        const isDarkMode = ref(false)
        function toggleMode() {
            isDarkMode.value = !isDarkMode.value
            // 保存用戶偏好
            localStorage.setItem('darkMode', isDarkMode.value)
        }

        // 初始化模式
        const savedMode = localStorage.getItem('darkMode')
        if (savedMode === 'true') {
            isDarkMode.value = true
        }

        // 側邊欄資料夾
        const folders = [
            { name: '收件匣', icon: '📥', count: 42 },
            { name: '已傳送', icon: '📤', count: 17 },
            { name: '草稿', icon: '📝', count: 3 },
            { name: '已封存', icon: '🗄️', count: 25 }
        ]

        // 選中的資料夾
        const selectedFolder = ref('收件匣')
        function selectFolder(name) {
            selectedFolder.value = name
        }

        // 郵件列表
        const emails = ref([
            { 
                id: 1, 
                sender: '張小姐', 
                subject: '專案會議邀請', 
                preview: '下週一下午2點，是否有空參加...', 
                time: '上午 10:30',
                isRead: false
            },
            { 
                id: 2, 
                sender: '人事部門', 
                subject: '年終獎金通知', 
                preview: '您的年終獎金已核算完畢...', 
                time: '昨天',
                isRead: true
            }
        ])

        // 搜尋功能
        const searchQuery = ref('')
        const filteredEmails = computed(() => {
            return emails.value.filter(email => 
                email.sender.includes(searchQuery.value) || 
                email.subject.includes(searchQuery.value)
            )
        })

        // 選擇郵件
        const selectedEmail = ref(null)
        function selectEmail(email) {
            selectedEmail.value = email
            // 標記為已讀
            email.isRead = true
        }

        return {
            isDarkMode,
            toggleMode,
            folders,
            selectedFolder,
            selectFolder,
            emails,
            searchQuery,
            filteredEmails,
            selectedEmail,
            selectEmail
        }
    }
}).mount('#app')
