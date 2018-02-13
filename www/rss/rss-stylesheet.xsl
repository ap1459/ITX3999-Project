<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
    <body>
      <h2>News!</h2>
       <xsl:for-each select="rss/channel/item">
          <div style="color: #100000; padding:4px;">
             <span style="font-weight:bold;  text-decoration: underline;">
               <xsl:value-of select="title"/>
             </span>
          </div>
          <div style="color: #200000; padding:2px; font-size:11px;">
             <span>
               <xsl:value-of select="pubDate"/>
             </span>
          </div>
          <div style="margin: 1em 0 1em 2em; margin-right:25px;font-size:12pt;">
             <span>
               <xsl:apply-templates select="story"/>  
             </span>
          </div>
    </xsl:for-each>
   </body>
 </html>
</xsl:template>

<xsl:template match="htext">
    <a href="{@url}">
        <xsl:apply-templates />
    </a>
</xsl:template>
</xsl:stylesheet>