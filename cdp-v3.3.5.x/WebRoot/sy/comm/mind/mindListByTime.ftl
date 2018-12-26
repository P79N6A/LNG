<#assign mindList = userMind.getMindList(odeptCode) > 
	<#if mindList?size != 0>
		<#list mindList as mind>
			<tr class="h25">
				<td class="pb5 pt5"><span>${mind.S_TNAME}</span></td>
				<td class="pb5 pt5"><span>${mind.S_UNAME}</span></td>		
				<td class="pb5 pt5">
					<#if mind.WF_NI_NAME??>
						<span>${mind.WF_NI_NAME}</span>
					</#if>	
				</td>
				<td  class="wp65 pb5 pt5" align="left">
					<#if mind.MIND_CONTENT??>
					<span class="MIND_CONTENT">${mind.MIND_CONTENT}</span>
					</#if>
					<#if mind.MIND_FILE_ID??>
					&nbsp;&nbsp;&nbsp;[<a href="/file/${mind.MIND_FILE_ID}" fileID="${mind.MIND_FILE_ID}" target="_blank" class="MIND_FILE" title="${mind.MIND_FILE_NAME}"><span class="icon-image iconC" style="border:0"></span>附件</a>]
					</#if>
					<#if canCopy?? && canCopy=true>&nbsp;[<a href="#" class="COPY_MIND">复制</a>]</#if>
				</td>	
				<td class="pb5 pt5">
				     <span>${mind.MIND_TIME?substring(0,16)}<span>
				</td>
				<td class="pb5 pt5">
				    <#if mind.MIND_CODE_NAME??>
					<span>${mind.MIND_CODE_NAME}</span>
					</#if>
				</td>																																												
			</tr>
		</#list>
	</#if>