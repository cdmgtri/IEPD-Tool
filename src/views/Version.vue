
<template>
  <div>
    <h2>Version 0.1</h2>
    <p>11-15-2018</p>

    <div class="alert alert-info">
      <h3>Initial release.</h3>
      <hr>
      <p><b>Major Features:</b></p>
      <ul>

        <li>Initial prototype</li>
        <ul>
          <li>Single page application written in JavaScript and VueJS (front-end framework)</li>
          <li>Hosted on GitHub</li>
          <li>Rest-like approach to navigation, enabling URLs for keyword searches and IEPD pages</li>
        </ul>

        <li>IEPD repository</li>
        <ul>
          <li>20 sample IEPDs loaded from the old <a href="https://tools.niem.gov/niemtools/iepdt/search/index.iepd">NIEM tools IEPD repository</a></li>
          <li>Parsed IEPD metadata.xml files</li>
          <li>Carousel on the home page to display basic information about 5 randomly selected IEPDs</li>
        </ul>

        <li>Basic search functionality</li>
        <ul>
          <li>Keyword search on content from the IEPD metadata.xml files</li>
          <li>Result pagination and column sorting enabled</li>
          <li>More button to show IEPD long description underneath result row</li>
          <li>Open button to open the IEPD page for more detailed information</li>
        </ul>

        <li>View IEPD metadata</li>
        <ul>
          <li>From the search results, click on the right-arrow button to open the IEPD page for more detailed information.</li>
          <li>Fields are taken from the IEPD's metadata.xml file.  Empty values have been removed to improve the display.</li>
          <li>View the IEPD package on the GitHub repo</li>
          <li>Download the IEPD package zip file from the GitHub repo</li>
        </ul>

        <li>Styling</li>
        <ul>
          <li>Implemented similar styling to the <a href="https://niem.gov">niem.gov</a> and <a href="https://niem.github.io">niem.github.io</a> websites.</li>
        </ul>

        <li>Pages</li>
        <ul>
          <li>Home - IEPD spotlight</li>
          <li>Search - Keyword search on IEPDs, view results.  Browse all IEPDs if no keyword is entered.</li>
          <li>IEPD (open a search result) - View metadata about the IEPD, open the package, or download the zip.</li>
          <li>Help / FAQ - Initial pass at some common IEPD-related questions</li>
          <li>Help / About - Outlines current status, planned features, and a proposal for a larger NIEM tool strategy.</li>
          <li>Help / Report - See how to submit an issue.</li>
          <li>Help / Version - Change log information about the tool.</li>
        </ul>
      </ul>
    </div>

  </div>
</template>
