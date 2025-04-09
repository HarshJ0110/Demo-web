document.addEventListener("DOMContentLoaded", async () => {
    try {
      // Fetch the JSON data
      const response = await fetch("data.json")
      if (!response.ok) {
        throw new Error("Failed to load data")
      }
      const data = await response.json()
      console.log('data', data)
  
      // Populate the website with data
      populateWebsite(data)
    } catch (error) {
      console.error("Error loading website data:", error)
      document.body.innerHTML =
        '<div style="text-align: center; padding: 50px;"><h1>Error loading website</h1><p>Please try again later.</p></div>'
    }
  })
  
  function populateWebsite(data) {
    // Set page title
    document.getElementById("page-title").textContent = data.siteInfo.name
  
    // Set logo
    document.getElementById("logo-img").src = data.siteInfo.logo
  
    // Populate navigation
    const navLinks = document.getElementById("nav-links")
    navLinks.innerHTML = data.navigation.links
      .map((link) => `<a href="${link.url}" ${link.active ? 'class="active"' : ""}>${link.text}</a>`)
      .join("")
  
    // Populate hero section
    document.getElementById("hero-title").textContent = data.hero.title
    document.getElementById("hero-description").textContent = data.hero.description
    document.getElementById("hero-cta").href = data.hero.cta.url
    document.getElementById("hero-cta-text").textContent = data.hero.cta.text
  
    // Populate testimonial section
    document.getElementById("testimonial-quote").textContent = data.testimonial.quote
    document.getElementById("testimonial-conclusion").textContent = data.testimonial.conclusion
  
    // Populate contact invite section
    document.getElementById("contact-invite-heading").textContent = data.contactInvite.heading
    document.getElementById("contact-invite-description").textContent = data.contactInvite.description
  
    // Populate services section
    document.getElementById("services-icon").className = data.services.icon
    document.getElementById("services-heading").textContent = data.services.heading
  
    const servicesGrid = document.getElementById("services-grid")
    servicesGrid.innerHTML = data.services.columns
      .map(
        (column) => `
          <div class="service-column">
              <h3>${column.title}</h3>
              <ul>
                  ${column.items.map((item) => `<li>${item}</li>`).join("")}
              </ul>
          </div>
      `,
      )
      .join("")
  
    // Populate CTA section
    document.getElementById("cta-heading").textContent = data.cta.heading
    document.getElementById("cta-description").textContent = data.cta.description
    document.getElementById("cta-button").textContent = data.cta.button.text
    document.getElementById("cta-button").href = data.cta.button.url
  
    // Populate footer
    // document.getElementById("footer-company-name").textContent = data.siteInfo.name
    // document.getElementById("footer-tagline").textContent = data.siteInfo.tagline
  
    // Footer company links
    // document.getElementById("footer-company-heading").textContent = data.footer.company.heading
    // const footerCompany = document.getElementById("footer-company")
    // data.footer.company.links.forEach((link) => {
    //   const a = document.createElement("a")
    //   a.href = link.url
    //   a.textContent = link.text
    //   footerCompany.appendChild(a)
    // })
  
    // Footer services links
    // document.getElementById("footer-services-heading").textContent = data.footer.services.heading
    // const footerServices = document.getElementById("footer-services")
    // data.footer.services.links.forEach((link) => {
    //   const a = document.createElement("a")
    //   a.href = link.url
    //   a.textContent = link.text
    //   footerServices.appendChild(a)
    // })
  
    // Footer contact info
    // document.getElementById("footer-contact-heading").textContent = data.footer.contact.heading
    // document.getElementById("footer-phone").href = `tel:${data.footer.contact.phone}`
    // document.getElementById("footer-phone").textContent = data.footer.contact.phone
    // document.getElementById("footer-email").href = `mailto:${data.footer.contact.email}`
    // document.getElementById("footer-email").textContent = data.footer.contact.email
  
    // Social icons
    // const socialIcons = document.getElementById("social-icons")
    // socialIcons.innerHTML = data.footer.contact.social
    //   .map((social) => `<a href="${social.url}"><i class="${social.icon}"></i></a>`)
    //   .join("")
  
    // Copyright
    // document.getElementById("copyright").textContent =
    //   `© ${data.siteInfo.year} ${data.siteInfo.name} All rights reserved.`
  }
  
  
