import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserSessionStore = defineStore('UserSessionStore', () => {

    const userName = ref("Guest Builder")
    
    const visitGitHub = () => {
        const githubUser = 'Guillermo-Mir'
        window.open(`https://github.com/${githubUser}`, '_blank')
    }

    return { userName, visitGitHub }
})