<template>
  <div class="page-contactus">
    <div class="sections-wrapper">
      <div class="section-content" style="margin-bottom: 96px">
        <div class="vertical-wrapper" id="contact_find_us">
          <h1
            data-aos="none"
            data-aos-once="true"
            style="
              font-size: 48px;
              color: rgba(0, 0, 0, 0.85);
              max-width: 794px;
            "
          >
            {{$t("contact_find_us")}}
          </h1>
          <p
            data-aos="none"
            data-aos-once="true"
            class="text-ms-16 style__description___2V1Q7"
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              color: rgba(0, 0, 0, 0.65);
              max-width: 794px;
            "
          >
             {{$t("contact_intro")}}
          </p>
        </div>
        <div class="product-item">
          <h1>  {{$t("contact_us3")}}</h1>
          <p class="itemp">{{$t("contact_info")}}</p>
          <div>
            <div id="contact_phone">
              <div id="">
                <img
                  src="~/public/images/contact23.png"
                  alt=""
                  width="80"
                  height="80"
                />
                <div style="margin-top: -10px;">
                  <p style="font-size: 20px; font-weight: bold">{{$t("contact_phone")}}</p>
                  <p>0755-3692781</p>
                </div>
              </div>
              <div>
                <img
                  src="~/public/images/contact24.png"
                  alt=""
                  width="80"
                  height="80"
                />
                 <div style="margin-top: -10px;">
                   <p style="font-size: 20px; font-weight: bold">{{$t("contact_email")}}</p>
                  <p>admin@pinkuo.cn</p>
                </div>
              </div>
              <div>
                <img
                  src="~/public/images/contact25.png"
                  alt=""
                  width="80"
                  height="80"
                />
                <div style="margin-top: -10px;">
                  <p style="font-size: 20px; font-weight: bold">{{$t("contact_address")}}</p>
                  <p>{{$t("contact_address_1")}}</p>
                  <br /> 
                  <p>{{$t("contact_address_2")}}</p>
                </div>
              </div>

              <div>
                <img
                  src="~/public/images/contact26.png"
                  alt=""
                  width="80"
                  height="80"
                />
                <div style="margin-top: -10px;">
                  <p style="font-size: 20px; font-weight: bold">{{$t("contact_hours")}}</p>
                  <p>09:00-18:00</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="~/public/images/contact21.png"
                alt=""
                width="1560"
                height="700"
              />
              <img
                src="~/public/images/contact22.png"
                alt=""
                width="1560"
                height="700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
