
<template>
  <div class="container">

    <h2>Current Features</h2>
    <ul>
      <li>
        <b>Search</b>
        <p>Search IEPD metadata.  This tool currently only parses metadata from IEPDs following the original MPD 1.0 specification.</p>
      </li>
      <li>
        <b>IEPD repository</b>
        <p>Upload an unzipped IEPD package into this website's GitHub repository, under the <code>repo</code> folder.  The tool will grab its metadata file to use for IEPD searches.</p>
      </li>
      <li>
        <b>Version history</b>
        <p>Please see the <router-link :to="'Version'">Help / Version</router-link> page for more details.</p>
      </li>
    </ul>

    <h2>Planned Features</h2>
    <ul>
      <li>
        <b>Search newer IEPDs</b>
        <p>Add support for mpd-catalog, from the MPD 3.0 specification.  Support for older IEPDs was chosen to occur first because of their greater availability in existing repositories.</p>
      </li>
      <li>
        <b>Upload IEPD zips</b>
        <p>Simplify the repository import process by allowing an IEPD zip file to be uploaded and automatically unzipping and saving it.</p>
      </li>
      <li>
        <b>Registry functionality</b>
        <p>Support metadata about external registries and repositories to include with searches.  Also support metadata-only for IEPDs located elsewhere, but registered individually here (this is more granular and detailed than just information about a registry or repository).</p>
      </li>
      <li>
        <b>Load IEPDs from other repositories</b>
        <p>Load existing IEPDs from the NIEM tools and OJP IEPD repositories.  Load IEPDs from other community repositories as requested.</p>
      </li>
      <li>
        <b>Better search and filter functionality</b>
        <p>Add the ability to filter on additional fields, like NIEM release.  Improve search functionality, like supporting multiple keywords.</p>
      </li>
      <li>
        <b>Create a new IEPD</b>
        <p>Collect some common pieces of IEPD metadata from a user (like IEPD name, summary, description, etc.) and provide a customized template IEPD for download, along with basic instructions on what to do next.  This will help users get started building an IEPD.</p>
      </li>
      <li>
        <b>Add a REST API</b>
        <p>Split the app into separate projects: a repo for the data, a REST API, and the user interface.</p>
      </li>
      <li>
        <b>NIEM subset stats</b>
        <p>Parse NIEM subsets from the IEPDs in this tool repository.  This can be used to improve search results and to also provide users with a list of the most commonly used components in NIEM.</p>
      </li>
      <li>
        <b>Search IEPD extensions</b>
        <p>Parse the extension schemas to allow for better searches and future extension harvesting.</p>
      </li>
    </ul>

    <h2>Long-term NIEM tool strategy goals</h2>
    <p>Incrementally build out tool support so that existing and future functionality is available not only for NIEM releases, but for IEPDs and community NIEM-based models as well.</p>

    <b>Key Features</b>
    <ul>
      <li>
        <b>XML and JSON support for NIEM releases, IEPDs and local data models</b>
        <p>Load NIEM IEPDs and local data models, in addition to the NIEM releases, into a tool hub that can generate full or subset schemas in XML or JSON, as well as documentation.</p>
      </li>
      <li>
        <b>User interface for building common kinds of NIEM extensions</b>
        <p>Provide a user interface that enables users to build common kinds of NIEM components without needing advanced schema or NIEM NDR knowledge.  Standard schema editors do not have any knowledge of NIEM built in.  The UI would not need to support full schema editor functionality, but would leverage the common patterns behind NIEM concepts to simplify content creation.</p>
      </li>
      <li>
        <b>Integrated conformance testing</b>
        <p>Integrate conformance testing into the tool, making it easier for developers to spot issues and for managers to confirm that basic requirements have been met.</p>
      </li>
    </ul>

    <b>Benefits</b>
    <ul>
      <li>
        <b>Make NIEM quicker and easier</b>
        <p>Lower the learning curve and make NIEM exchanges easier to develop by providing better tool support for the community.</p>
      </li>
      <li>
        <b>Fill in significant gaps in tool coverage for the IEPD lifecycle</b>
        <p>Bridge a major gap in the IEPD development life cycle (modeling extensions and building schema artifacts).  IEPD tool support covers building subsets and running conformance checks on extension schemas that have been built manually.</p>
      </li>
      <li>
        <b>Improve the quality of NIEM exchanges</b>
        <p>Improve the quality and consistency of NIEM exchanges and models through more comprehensive tool support and improved testing and enable greater accountability and transparency for project deliverables.</p>
      </li>
      <li>
        <b>Better JSON support</b>
        <p>JSON continues to grow in popularity.  In order for JSON developers to use NIEM, it will likely be necessary to provide greater tool support that simplifies and speeds development time.</p>
      </li>
      <li>
        <b>Community driven growth</b>
        <p>NIEM releases are easily available for reuse through centrally published schemas and tools.  IEPDs can be hard to find and rarely reused on a more granular component level.  Making IEPD elements and types as easy to add to a subset as NIEM release elements and types might really drive growth and reuse.</p>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: "About",
}
</script>