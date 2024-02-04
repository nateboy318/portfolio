<template>
  <section class="ContactForm">
    <div class="form-container">
      <h1 class="headline">Send Me A Message</h1>
      <p class="subtext">
        Have a specific inquiry or message for me? Please use the contact form
        below and i will get back with you quickly!
      </p>
    </div>
    <form
      action="https://public.herotofu.com/v1/0f4e4c30-c39f-11ee-bb69-515451de93af"
      method="post"
      accept-charset="UTF-8"
    >
      <div class="col-1">
        <input
          name="Name"
          id="name"
          type="text"
          placeholder="First Name"
          required
        />

        <input
          name="Name"
          id="name"
          type="text"
          placeholder="Last Name"
          required
        />

        <input
          name="Email"
          id="email"
          type="email"
          placeholder="Email"
          required
        />
        <div>
          <input id="submit" type="submit" value="Submit" />
          <div
            style="
              text-indent: -99999px;
              white-space: nowrap;
              overflow: hidden;
              position: absolute;
            "
            aria-hidden="true"
          >
            <input
              type="text"
              name="_gotcha"
              tabindex="-1"
              autocomplete="off"
            />
          </div>
        </div>
      </div>
      <div class="col-2">
        <textarea
          name="message"
          id="message"
          cols="600"
          rows="15"
          placeholder="Message"
        ></textarea>
      </div>
    </form>
  </section>
</template>
