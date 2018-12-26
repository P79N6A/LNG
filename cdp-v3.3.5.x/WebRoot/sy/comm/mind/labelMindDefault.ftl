<#list mindList as mind>
    <ul>
        <li>${mind.MIND_CONTENT}</li>
        <li>${mind.S_UNAME}</li>
        <li><#if (mind.S_MTIME)?length gt 19> ${mind.S_MTIME?substring(0,19)}</#if></li>
    </ul>
</#list>