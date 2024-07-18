<template>
  <div
    class="app-page"
    @wheel="handleWheel"
    @mouseover="
      () => {
        optionsMore = 0;
        share = 0;
      }
    "
  >
    <div
      class="page-header"
      :style="{ top: header ? 0 : '-90px' }"
      @mouseover="headerMouseover"
    >
      <Transition name="page-logo">
        <img v-if="loadFlag" class="logo" src="/src/assets/images/app/footer/logo_bjdh_01.png" />
      </Transition>
      <div class="options">
        <div class="item" @mouseover.stop="optionsMore = 1">
          <Transition name="header-msg-one">
            <div v-if="loadFlag">About</div>
          </Transition>
          <Transition name="options-more">
            <div class="more" v-if="optionsMore === 1">
              <div>Who we are</div>
              <div>Structure</div>
              <div>Experts</div>
              <div>Contact us</div>
              <div>Join us</div>
            </div>
          </Transition>
        </div>
        <div>/</div>
        <div class="item" @mouseover.stop="optionsMore = 2">
          <Transition name="header-msg-two">
            <div v-if="loadFlag">Multimedia</div>
          </Transition>
          <Transition name="options-more">
            <div class="more" v-if="optionsMore === 2">
              <div>Who we are</div>
              <div>Structure</div>
              <div>Experts</div>
              <div>Contact us</div>
              <div>Join us</div>
            </div>
          </Transition>
        </div>
        <div>/</div>
        <div class="item">
          <Transition name="header-msg-three">
            <div v-if="loadFlag">Programs</div>
          </Transition>
        </div>
        <div>/</div>
        <div class="item">
          <Transition name="header-msg-four">
            <div v-if="loadFlag">Events</div>
          </Transition>
        </div>
        <div>/</div>
        <div class="item">
          <Transition name="header-msg-five">
            <div v-if="loadFlag">Publications</div>
          </Transition>
        </div>
        <div>/</div>
        <div class="item">
          <Transition name="header-msg-six">
            <div v-if="loadFlag">Partners</div>
          </Transition>
        </div>
      </div>
      <div class="login">
        <Transition name="header-msg-seven">
          <img v-if="loadFlag" src="/src/assets/images/app/header/btn_sousuo_01.png" />
        </Transition>
        <Transition name="header-msg-eight">
          <span v-if="loadFlag">EN</span>
        </Transition>
        
        <div class="line"></div>
        <Transition name="header-msg-nine">
          <div class="login-img" v-if="loadFlag" @mouseover.stop="login = true">
            <Transition name="login">
              <img
                v-if="login"
                src="/src/assets/images/app/header/btn_login_02.png"
              />
              <img v-else src="/src/assets/images/app/header/btn_login_01.png" />
            </Transition>
          </div>
        </Transition>
      </div>
    </div>
    <div class="page-step">
      <div class="step-box">
        <div
          v-for="index in 8"
          :class="{ item: true, selected: index == step + 1 }"
          :key="index"
        ></div>
        <div
          class="selected-icon"
          :style="{ top: !step ? '-16px' : `${step * 38 - 16}px` }"
        ></div>
      </div>
    </div>
    <div class="page-share">
      <div class="content">
        <div class="item" @mouseover.stop="share = 1">
          <Transition name="share">
            <img
              v-if="share === 1"
              src="/src/assets/images/app/swiper/x2.png"
              alt=""
            />
            <img v-else src="/src/assets/images/app/swiper/x3.png" alt="" />
          </Transition>
        </div>
        <div class="line"></div>
        <div class="item" @mouseover.stop="share = 2">
          <Transition name="share">
            <img
              v-if="share === 2"
              src="/src/assets/images/app/swiper/icon_logo_fb_03.png"
              alt=""
            />
            <img
              v-else
              src="/src/assets/images/app/swiper/icon_logo_fb_02.png"
              alt=""
            />
          </Transition>
        </div>
        <div class="line"></div>
        <div class="item" @mouseover.stop="share = 3">
          <Transition name="share">
            <img
              v-if="share === 3"
              src="/src/assets/images/app/swiper/icon_logo_yl_03.png"
              alt=""
            />
            <img
              v-else
              src="/src/assets/images/app/swiper/icon_logo_yl_02.png"
              alt=""
            />
          </Transition>
        </div>
        <div class="line"></div>
        <div class="item" @mouseover.stop="share = 4">
          <Transition name="share">
            <img
              v-if="share === 4"
              src="/src/assets/images/app/swiper/icon_logo_yt_03.png"
              alt=""
            />
            <img
              v-else
              src="/src/assets/images/app/swiper/icon_logo_yt_02.png"
              alt=""
            />
          </Transition>
        </div>
        <div class="line"></div>
        <div class="item" @mouseover.stop="share = 5">
          <Transition name="share">
            <img
              v-if="share === 5"
              src="/src/assets/images/app/swiper/icon_logo_email_03.png"
              alt=""
            />
            <img
              v-else
              src="/src/assets/images/app/swiper/icon_logo_email_02.png"
              alt=""
            />
          </Transition>
        </div>
        <div class="line"></div>
        <div class="item" @mouseover.stop="share = 6">
          <Transition name="share">
            <img
              v-if="share === 6"
              src="/src/assets/images/app/swiper/icon_logo_ins_03.png"
              alt=""
            />
            <img
              v-else
              src="/src/assets/images/app/swiper/icon_logo_ins_02.png"
              alt=""
            />
          </Transition>
        </div>
      </div>
    </div>
    <div class="swiper">
      <div class="mask"></div>
      <div class="item" v-for="(item, index) in swiperData.list" :key="index">
        <Transition name="swiper-msg">
          <div class="swiper-msg" v-if="loadFlag && swiperData.current === index">
            <div class="main">Beijing Club</div>
            <div class="secondary">Think Tank Platform</div>
            <div class="next-btn">
              <img
                class="btn-3"
                src="/src/assets/images/app/swiper/btn_next_03.png"
              />
              <img
                class="btn-2"
                src="/src/assets/images/app/multimedia/btn_more_02.png"
              />
              <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
              <div class="btn-msg">More</div>
            </div>
          </div>
        </Transition>
        
        <Transition name="swiper-change">
          <img :src="item.image" v-if="loadFlag && index === swiperData.current" />
        </Transition>
      </div>
      <div
        :class="{
          'current-total': true,
          'current-total-even': !!swiperData.current % 2,
        }"
      >
        <div class="swiper-total">
          {{
            swiperData.list.length < 10
              ? "0" + swiperData.list.length
              : swiperData.list.length
          }}
        </div>
        <div class="swiper-current">
          {{
            swiperData.current + 1 < 10
              ? "0" + (swiperData.current + 1)
              : swiperData.current + 1
          }}
        </div>
      </div>
      <div
        :class="{ 'next-btn': true, 'next-btn-even': !!swiperData.current % 2 }"
        @click="swiperChange"
      >
        <img
          class="btn-3"
          src="/src/assets/images/app/swiper/btn_next_03.png"
        />
        <img
          class="btn-2"
          src="/src/assets/images/app/swiper/btn_next_02.png"
        />
        <img src="/src/assets/images/app/swiper/btn_nextjt_01.png" />
      </div>
    </div>
    <div
      class="about"
      :style="{ opacity: step ? 1 : 0, transform: `scale(${step ? 1 : 1.4}) translateY(${step ? 0 : '30vh'})`, zIndex: step ? 10 : 0 }"
    >
      <div class="mask"></div>
      <div class="about-bg" :style="{ left: step ? 0 : '-20vw' }">
        <div class="msg">
          <Transition name="about-title">
            <div class="title" v-if="step">About</div>
          </Transition>
          <Transition name="about-content">
            <div class="content" v-if="step">
              Beijing Club for International Dialogue，brings together leading
              international experts and scholars
              <br />
              With our mind towards in-depth research and pragmatic
              communications, we are committed to facilitating exchanges and
              dialogue between Chinese and foreign dignitaries, scholars, and
              professionals, to enhance mutual trust and consensus, to promote
              the construction of bilateral and multilateral dialogue tracks,
              and to provide forward thinking and solutions to global issues
            </div>
          </Transition>
          <Transition name="about-btn">
            <div class="next-btn" v-if="step">
              <img
                class="btn-3"
                src="/src/assets/images/app/swiper/btn_next_03.png"
              />
              <img
                class="btn-2"
                src="/src/assets/images/app/swiper/btn_next_02.png"
              />
              <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
              <div class="btn-msg">More</div>
            </div>
          </Transition>
        </div>
        <Transition name="about-us">
          <div class="tag" v-if="step">
            <img src="/src/assets/images/app/about/img_text_abus_01.png" />
          </div>
        </Transition>
      </div>
      <img
        class="about-img"
        src="/src/assets/images/app/about/bg_img_baout_02.jpg"
      />
      <img
        class="right-img"
        :style="{ right: step ? 0 : '-10vw' }"
        src="/src/assets/images/app/about/bg_img_about_02.png"
      />
      <img
        class="right-img2"
        :style="{ right: step ? 0 : '-10vw' }"
        src="/src/assets/images/app/about/bg_img_about_05.png"
      />
    </div>
    <div class="multimedia-programs" :style="{ top: step > 1 ? 0 : '100vh' }">
      <div class="multimedia" :style="{ top: step === 2 ? 0 : '-100vh' }">
        <img
          src="/src/assets/images/app/multimedia/img-bg.png"
          class="multimedia-bj"
        />
        <div class="multimedia-content">
          <div class="top">
            <Transition name="multimedia-left">
              <div class="left" v-if="step >= 2">
                <img
                  class="img-item"
                  src="/src/assets/images/app/multimedia/img_list_mul_01.png"
                />
                <div
                  class="mask"
                  @mouseover="multimedia = 1"
                  @mouseout="multimedia = null"
                >
                  <Transition name="multimedia-change">
                    <div class="mask-icon">
                      <img
                        v-if="multimedia === 1"
                        src="/src/assets/images/app/multimedia/icon_movie_01_h.png"
                      />
                      <img
                        v-else
                        src="/src/assets/images/app/multimedia/icon_movie_01_n.png"
                      />
                    </div>
                  </Transition>
                  <div class="title">BRICS Conference</div>
                  <div class="mask-msg">
                    BRICS Monetary and Financial System Reform, Closed Door
                    Dialogue held in Beijing, attended by over 50 experts and
                    <br />
                    scholars
                  </div>
                  <img
                    class="top-icon"
                    src="/src/assets/images/app/multimedia/img_mul_jiao_01.png"
                  />
                  <img
                    class="bottom-icon"
                    src="/src/assets/images/app/multimedia/img_mul_jiao_01.png"
                  />
                </div>
              </div>
            </Transition>
            <div class="multimedia-info">
              <div>
                <Transition name="top-title">
                  <div class="title" v-if="step >= 2">Multimedia</div>
                </Transition>
                <Transition name="top-msg">
                  <div class="msg" v-if="step >= 2">
                    The news center mainly publishes reports <br />
                    on the participation and speeches of experts <br />
                    from Chinese and foreign think tanks, as <br />
                    well as the papers written by experts
                  </div>
                </Transition>
              </div>
              <Transition name="top-btn">
                <div class="next-btn" v-if="step >= 2">
                  <img
                    class="btn-3"
                    src="/src/assets/images/app/swiper/btn_next_03.png"
                  />
                  <img
                    class="btn-2"
                    src="/src/assets/images/app/multimedia/btn_more_02.png"
                  />
                  <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
                  <div class="msg">More</div>
                </div>
              </Transition>
            </div>
          </div>
          <div class="bottom">
            <Transition name="bottom-one">
              <div class="item" v-if="step >= 2">
                <img
                  class="img-item"
                  src="/src/assets/images/app/multimedia/img_list_mul_02.png"
                />
                <div
                  class="mask"
                  @mouseover="multimedia = 2"
                  @mouseout="multimedia = null"
                >
                  <Transition name="multimedia-change">
                    <div class="mask-icon">
                      <img
                        v-if="multimedia === 2"
                        src="/src/assets/images/app/multimedia/icon_tuwen_01_h.png"
                      />
                      <img
                        v-else
                        src="/src/assets/images/app/multimedia/icon_tuwen_01_n.png"
                      />
                    </div>
                  </Transition>
                  <div class="title">Upcoming Events</div>
                  <div class="mask-msg">
                    Beijing Dialogue Successfully Holds, Looking Forward to the
                    <br />
                    BRICS Summit, Focusing on Global Southern Cooperation and
                    <br />
                    Development
                  </div>
                  <img
                    class="top-icon"
                    src="/src/assets/images/app/multimedia/img_mul_jiao_01.png"
                  />
                  <img
                    class="bottom-icon"
                    src="/src/assets/images/app/multimedia/img_mul_jiao_01.png"
                  />
                </div>
              </div>
            </Transition>
            <Transition name="bottom-two">
              <div class="item" v-if="step >= 2">
                <img
                  class="img-item"
                  src="/src/assets/images/app/multimedia/img_list_mul_03.png"
                />
                <div
                  class="mask"
                  @mouseover="multimedia = 3"
                  @mouseout="multimedia = null"
                >
                  <Transition name="multimedia-change">
                    <div class="mask-icon">
                      <img
                        v-if="multimedia === 3"
                        src="/src/assets/images/app/multimedia/icon_tuwen_01_h.png"
                      />
                      <img
                        v-else
                        src="/src/assets/images/app/multimedia/icon_tuwen_01_n.png"
                      />
                    </div>
                  </Transition>
                  <div class="title">BRICS Currency</div>
                  <div class="mask-msg">
                    Co hosted by the Beijing Dialogue United Nations Southern
                    <br />
                    Center
                  </div>
                  <img
                    class="top-icon"
                    src="/src/assets/images/app/multimedia/img_mul_jiao_01.png"
                  />
                  <img
                    class="bottom-icon"
                    src="/src/assets/images/app/multimedia/img_mul_jiao_01.png"
                  />
                </div>
              </div>
            </Transition>
            <Transition name="bottom-three">
              <div class="item" v-if="step >= 2">
                <img
                  class="img-item"
                  src="/src/assets/images/app/multimedia/img_list_mul_04.png"
                />
                <div
                  class="mask"
                  @mouseover="multimedia = 4"
                  @mouseout="multimedia = null"
                >
                  <Transition name="multimedia-change">
                    <div class="mask-icon">
                      <img
                        v-if="multimedia === 4"
                        src="/src/assets/images/app/multimedia/icon_yinpin_01_h.png"
                      />
                      <img
                        v-else
                        src="/src/assets/images/app/multimedia/icon_yinpin_01_n.png"
                      />
                    </div>
                  </Transition>
                  <div class="title">Past Events</div>
                  <div class="mask-msg" style="margin-bottom: 48px">
                    Countdown to US dollar hegemony？
                  </div>
                  <img
                    class="top-icon"
                    src="/src/assets/images/app/multimedia/img_mul_jiao_01.png"
                  />
                  <img
                    class="bottom-icon"
                    src="/src/assets/images/app/multimedia/img_mul_jiao_01.png"
                  />
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <div 
        class="programs"
        :style="{ transform: `scale(${ step >= 3 ? 1 : 1.2 })` }"
        @mousemove="programsMouseMove"
      >
        <img
          class="letter"
          src="/src/assets/images/app/programs/img_text_items_01.png"
          ref="letter"
         
        />
        <div class="content">
          <Transition name="programs-title">
            <div class="programs-title" v-if="step >= 3">Programs</div>
          </Transition>
          <Transition name="programs-btn">
            <div class="next-btn" v-if="step >= 3">
              <img
                class="btn-3"
                src="/src/assets/images/app/swiper/btn_next_03.png"
              />
              <img
                class="btn-2"
                src="/src/assets/images/app/swiper/btn_next_02.png"
              />
              <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
              <div class="msg">More</div>
            </div>
          </Transition>
          <Transition name="programs-item-one">
            <div class="item" v-if="step >= 3">
              <view
                class="trigger"
                @mouseover="programs = 1"
                @mouseout="programs = null"
              ></view>
              <div class="bg">
                <img
                  class="mask"
                  src="/src/assets/images/app/programs/img_pro_mask_01_n.png"
                />
                <img
                  class="horn"
                  src="/src/assets/images/app/programs/horn.png"
                />
                <Transition name="multimedia-change">
                  <img
                    v-if="programs === 1"
                    class="mask_h"
                    src="/src/assets/images/app/programs/img_pro_mask_01_h.png"
                  />
                </Transition>
                <div class="play-icon">
                  <Transition name="multimedia-change">
                    <img
                      v-if="programs === 1"
                      src="/src/assets/images/app/programs/btn_bofang_02_h.png"
                    />
                    <img
                      v-else
                      src="/src/assets/images/app/programs/btn_bofang_02_n.png"
                    />
                  </Transition>
                </div>
                <div class="info">
                  <div>Nuruysha Anwar</div>
                  <div class="msg">
                    Vice Chairman of the People's <br />
                    Justice Party
                  </div>
                </div>
              </div>
              <div class="time">29 JUNE, 2024</div>
            </div>
          </Transition>
          <Transition name="programs-item-two">
            <div class="item item-translateY" v-if="step >= 3">
              <view
                class="trigger"
                @mouseover="programs = 2"
                @mouseout="programs = null"
              ></view>
              <div
                class="bg"
                style="
                  background-image: url('/src/assets/images/app/programs/img_pro_03.png');
                "
              >
                <img
                  class="mask"
                  src="/src/assets/images/app/programs/img_pro_mask_01_n.png"
                />
                <img
                  class="horn"
                  src="/src/assets/images/app/programs/horn.png"
                />
                <Transition name="multimedia-change">
                  <img
                    v-if="programs === 2"
                    class="mask_h"
                    src="/src/assets/images/app/programs/img_pro_mask_01_h.png"
                  />
                </Transition>
                <div class="play-icon">
                  <Transition name="multimedia-change">
                    <img
                      v-if="programs === 2"
                      src="/src/assets/images/app/programs/btn_bofang_02_h.png"
                    />
                    <img
                      v-else
                      src="/src/assets/images/app/programs/btn_bofang_02_n.png"
                    />
                  </Transition>
                </div>
                <div class="info">
                  <div>Nuruysha Anwar</div>
                  <div class="msg">
                    Vice Chairman of the People's <br />
                    Justice Party
                  </div>
                </div>
              </div>
              <div class="time">27 JUNE, 2024</div>
            </div>
          </Transition>
          <Transition name="programs-item-three">
            <div class="item" v-if="step >= 3">
              <view
                class="trigger"
                @mouseover="programs = 3"
                @mouseout="programs = null"
              ></view>
              <div
                class="bg"
                style="
                  background-image: url('/src/assets/images/app/programs/img_pro_04.png');
                "
              >
                <img
                  class="mask"
                  src="/src/assets/images/app/programs/img_pro_mask_01_n.png"
                />
                <img
                  class="horn"
                  src="/src/assets/images/app/programs/horn.png"
                />
                <Transition name="multimedia-change">
                  <img
                    v-if="programs === 3"
                    class="mask_h"
                    src="/src/assets/images/app/programs/img_pro_mask_01_h.png"
                  />
                </Transition>
                <div class="play-icon">
                  <Transition name="multimedia-change">
                    <img
                      v-if="programs === 3"
                      src="/src/assets/images/app/programs/btn_bofang_02_h.png"
                    />
                    <img
                      v-else
                      src="/src/assets/images/app/programs/btn_bofang_02_n.png"
                    />
                  </Transition>
                </div>
                <div class="info">
                  <div>Nuruysha Anwar</div>
                  <div class="msg">
                    Vice Chairman of the People's <br />
                    Justice Party
                  </div>
                </div>
              </div>
              <div class="time">24 JUNE, 2024</div>
            </div>
          </Transition>
          <Transition name="programs-item-four">
            <div class="item item-translateY" v-if="step >= 3">
              <view
                class="trigger"
                @mouseover="programs = 4"
                @mouseout="programs = null"
              ></view>
              <div
                class="bg"
                style="
                  background-image: url('/src/assets/images/app/programs/img_pro_05.png');
                "
              >
                <img
                  class="mask"
                  src="/src/assets/images/app/programs/img_pro_mask_01_n.png"
                />
                <img
                  class="horn"
                  src="/src/assets/images/app/programs/horn.png"
                />
                <Transition name="multimedia-change">
                  <img
                    v-if="programs === 4"
                    class="mask_h"
                    src="/src/assets/images/app/programs/img_pro_mask_01_h.png"
                  />
                </Transition>
                <div class="play-icon">
                  <Transition name="multimedia-change">
                    <img
                      v-if="programs === 4"
                      src="/src/assets/images/app/programs/btn_bofang_02_h.png"
                    />
                    <img
                      v-else
                      src="/src/assets/images/app/programs/btn_bofang_02_n.png"
                    />
                  </Transition>
                </div>
                <div class="info">
                  <div>Nuruysha Anwar</div>
                  <div class="msg">
                    Vice Chairman of the People's <br />
                    Justice Party
                  </div>
                </div>
              </div>
              <div class="time">04 JUNE, 2024</div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
    <div
      class="events-publications"
      :style="{ top: step >= 4 ? 0 : '100vh' }"
      ref="eventsPublications"
      @scroll="eventsScroll"
    >
      <div class="events" @mouseover="videoPlay = false">
        <Transition name="events-msg">
          <div class="msg" v-if="step >= 4">
            Malaysian Prime Minister <br />
            Anwar Ibrahim Holds <br />
            Dialogue on Asian <br />
            Revival...
          </div>
        </Transition>
        <Transition name="events-video">
          <div v-if="step >= 4">
            <div class="video">
              <img
                class="video-img"
                src="/src/assets/images/app/events/img_events_01.png"
              />
              <div class="mask" @mouseover.stop="videoPlay = true">
                <Transition name="multimedia-change">
                  <img
                    class="play-icon"
                    v-if="videoPlay"
                    src="/src/assets/images/app/programs/btn_bofang_02_h.png"
                  />
                  <img
                    class="play-icon"
                    v-else
                    src="/src/assets/images/app/programs/btn_bofang_02_n.png"
                  />
                </Transition>
              </div>
            </div>
          </div>
        </Transition>
        <div :class="{ 'events-content': true, 'events-content-show': step >= 4 }">
          <img
            class="left-img"
            src="/src/assets/images/app/events/img_events_02.png"
          />
          <div class="right">
            <Transition name="events-top">
              <div class="top" v-if="step >= 4">
                <div class="title">Events</div>
                <div class="next-btn">
                  <img
                    class="btn-3"
                    src="/src/assets/images/app/swiper/btn_next_03.png"
                  />
                  <img
                    class="btn-2"
                    src="/src/assets/images/app/multimedia/btn_more_02.png"
                  />
                  <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
                  <div class="more">More</div>
                </div>
              </div>
            </Transition>
            <div class="option">
              <Transition name="option-one">
                <div class="item" v-if="step >= 4"><div>On the spot ></div></div>
              </Transition>
              <Transition name="option-one">
                <div class="item" v-if="step >= 4"><span>Annual events ></span></div>
              </Transition>
              <Transition name="option-two">
                <div class="item" v-if="step >= 4"><span>Upcoming events ></span></div>
              </Transition>
              <Transition name="option-two">
                <div class="item" v-if="step >= 4"><span>Major Release ></span></div>
              </Transition>
              <Transition name="option-three">
                <div class="item" v-if="step >= 4"><span>past events ></span></div>
              </Transition>
              <Transition name="option-three">
                <div class="item" v-if="step >= 4"><span>white paper ></span></div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
      <div class="publications" @mouseover="publications = null">
        <Transition name="publications-top">
          <div class="publications-top" v-if="eventsPublicationsValue > 220">
            <div class="title">Publications</div>
            <div class="next-btn">
              <img
                class="btn-3"
                src="/src/assets/images/app/swiper/btn_next_03.png"
              />
              <img
                class="btn-2"
                src="/src/assets/images/app/swiper/btn_next_02.png"
              />
              <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
              <div class="more">More</div>
            </div>
          </div>
        </Transition>
        <div class="publications-scroll" ref="publicationsScrollDom">
          <div
            class="publications-view"
            ref="draggable"
            @mousedown="startDrag"
            :style="{
              width: 33.35 * 5 + 8.4 * 4 + 'vh',
              transform: `translateX(${eventsPublications && eventsPublications.offsetHeight - eventsPublicationsValue}px)`,
            }"
          >
            <div
              class="item"
              style="
                background-image: url('/src/assets/images/app/events/img_pul_01.png');
                background-size: 100% 100%;
              "
            >
              <div class="mask" @mouseover.stop="publications = 1">
                <div class="title">June 30th</div>
                <div class="msg">
                  Academic reports <br />
                  published by experts
                </div>
                <img
                  class="top"
                  src="/src/assets/images/app/publications/img_jb_pul_01.png"
                />
                <img
                  class="bottom"
                  src="/src/assets/images/app/publications/img_jb_pul_01.png"
                />
                <Transition name="multimedia-change">
                  <div class="next-btn" v-if="publications === 1">
                    <img
                      class="btn-3"
                      src="/src/assets/images/app/swiper/btn_next_03.png"
                    />
                    <img
                      class="btn-2"
                      src="/src/assets/images/app/swiper/btn_next_02.png"
                    />
                    <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
                    <div class="more">More</div>
                  </div>
                </Transition>
              </div>
            </div>
            <div
              class="item"
              style="
                background-image: url('/src/assets/images/app/events/img_pul_02.png');
                background-size: 100% 100%;
              "
            >
              <div class="mask" @mouseover.stop="publications = 2">
                <div class="title">June 30th</div>
                <div class="msg">
                  Academic reports <br />
                  published by experts
                </div>
                <img
                  class="top"
                  src="/src/assets/images/app/publications/img_jb_pul_01.png"
                />
                <img
                  class="bottom"
                  src="/src/assets/images/app/publications/img_jb_pul_01.png"
                />
                <Transition name="multimedia-change">
                  <div class="next-btn" v-if="publications === 2">
                    <img
                      class="btn-3"
                      src="/src/assets/images/app/swiper/btn_next_03.png"
                    />
                    <img
                      class="btn-2"
                      src="/src/assets/images/app/swiper/btn_next_02.png"
                    />
                    <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
                    <div class="more">More</div>
                  </div>
                </Transition>
              </div>
            </div>
            <div
              class="item"
              style="
                background-image: url('/src/assets/images/app/events/img_pul_03.png');
                background-size: 100% 100%;
              "
            >
              <div class="mask" @mouseover.stop="publications = 3">
                <div class="title">June 30th</div>
                <div class="msg">
                  Academic reports <br />
                  published by experts
                </div>
                <img
                  class="top"
                  src="/src/assets/images/app/publications/img_jb_pul_01.png"
                />
                <img
                  class="bottom"
                  src="/src/assets/images/app/publications/img_jb_pul_01.png"
                />
                <Transition name="multimedia-change">
                  <div class="next-btn" v-if="publications === 3">
                    <img
                      class="btn-3"
                      src="/src/assets/images/app/swiper/btn_next_03.png"
                    />
                    <img
                      class="btn-2"
                      src="/src/assets/images/app/swiper/btn_next_02.png"
                    />
                    <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
                    <div class="more">More</div>
                  </div>
                </Transition>
              </div>
            </div>
            <div
              class="item"
              style="
                background-image: url('/src/assets/images/app/events/img_pul_01.png');
                background-size: 100% 100%;
              "
            >
              <div class="mask" @mouseover.stop="publications = 4">
                <div class="title">June 30th</div>
                <div class="msg">
                  Academic reports <br />
                  published by experts
                </div>
                <img
                  class="top"
                  src="/src/assets/images/app/publications/img_jb_pul_01.png"
                />
                <img
                  class="bottom"
                  src="/src/assets/images/app/publications/img_jb_pul_01.png"
                />
                <Transition name="multimedia-change">
                  <div class="next-btn" v-if="publications === 4">
                    <img
                      class="btn-3"
                      src="/src/assets/images/app/swiper/btn_next_03.png"
                    />
                    <img
                      class="btn-2"
                      src="/src/assets/images/app/swiper/btn_next_02.png"
                    />
                    <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
                    <div class="more">More</div>
                  </div>
                </Transition>
              </div>
            </div>
            <div
              class="item"
              style="
                background-image: url('/src/assets/images/app/events/img_pul_02.png');
                background-size: 100% 100%;
              "
            >
              <div class="mask" @mouseover.stop="publications = 5">
                <div class="title">June 30th</div>
                <div class="msg">
                  Academic reports <br />
                  published by experts
                </div>
                <img
                  class="top"
                  src="/src/assets/images/app/publications/img_jb_pul_01.png"
                />
                <img
                  class="bottom"
                  src="/src/assets/images/app/publications/img_jb_pul_01.png"
                />
                <Transition name="multimedia-change">
                  <div class="next-btn" v-if="publications === 5">
                    <img
                      class="btn-3"
                      src="/src/assets/images/app/swiper/btn_next_03.png"
                    />
                    <img
                      class="btn-2"
                      src="/src/assets/images/app/swiper/btn_next_02.png"
                    />
                    <img src="/src/assets/images/app/about/btn_nextjt_02.png" />
                    <div class="more">More</div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
          <div
            class="publications-step"
            ref="draggableStep"
            :style="{
              width: 33.35 * 5 + 8.4 * 4 + 'vh',
              transform: `translateX(${eventsPublications && eventsPublications.offsetHeight - eventsPublicationsValue}px)`,
            }"
          >
            <div class="first"><span>2024</span></div>
            <div class="item"><span>2023</span></div>
            <div class="item"><span>2022</span></div>
            <div class="item"><span>2021</span></div>
            <div class="item"><span>2020</span></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="interview-country"
      :style="{ top: step >= 5 ? (5 - step) * 100 + 'vh' : '100vh' }"
    >
      <video ref="videoDom" loop muted>
        <source
          src="/src/assets/images/app/interview/kadian.mp4"
          type="video/mp4"
        />
      </video>
      <div class="mask">
        <Transition name="video-title">
          <div v-if="step >= 5" class="title">Interview Country</div>
        </Transition>
        <Transition name="video-msg">
          <div v-if="step >= 5" class="msg" style="top: 20vh; left: 6vw">
            <div>Bahrain</div>
          </div>
        </Transition>
        <Transition name="video-msg">
          <div v-if="step >= 5" class="msg" style="top: 37vh; left: 13vw">
            <div>Singapore</div>
          </div>
        </Transition>
        <Transition name="video-msg">
          <div v-if="step >= 5" class="msg" style="top: 52vh; left: 12vw">
            <div>Berlin</div>
          </div>
        </Transition>
        <Transition name="video-msg">
          <div v-if="step >= 5" class="msg" style="top: 72vh; left: 8vw">
            <div>London</div>
          </div>
        </Transition>
        <Transition name="video-msg">
          <div v-if="step >= 5" class="msg" style="top: 22vh; right: 10vw">
            <div>Germany</div>
          </div>
        </Transition>
        <Transition name="video-msg">
          <div v-if="step >= 5" class="msg" style="top: 42vh; right: 15vw">
            <div>Germany</div>
          </div>
        </Transition>
        <Transition name="video-msg">
          <div v-if="step >= 5" class="msg" style="top: 55vh; right: 7vw">
            <div>Vietnam</div>
          </div>
        </Transition>
        <Transition name="video-msg">
          <div v-if="step >= 5" class="msg" style="top: 78vh; right: 20vw">
            <div>Dubai</div>
          </div>
        </Transition>
      </div>
    </div>
    <div
      class="partners"
      :style="{ top: step >= 6 ? (6 - step) * 60 + 'vh' : '100vh' }"
    >
      <div
        :style="{ transform: `translateY(${step === 6 ? 0 : '20vw'})` }"
        class="bg"
      ></div>
      <div
        :style="{ transform: `translateX(${step === 6 ? 0 : '30vw'})` }"
        class="title"
      >
        Partners
      </div>
      <Transition name="partners-logo">
        <div class="logo" v-if="step >= 6">
          <div>
            <img src="/src/assets/images/app/partners/logo_ngzx_01.png" />
            <img src="/src/assets/images/app/partners/logo_qih_01.png" />
            <img src="/src/assets/images/app/partners/logo_gcz_01.png" />
            <img src="/src/assets/images/app/partners/logo_ddzg_01.png" />
          </div>
          <div>
            <img src="/src/assets/images/app/partners/logo_qih_01.png" />
            <img src="/src/assets/images/app/partners/logo_gcz_01.png" />
            <img src="/src/assets/images/app/partners/logo_ddzg_01.png" />
            <img src="/src/assets/images/app/partners/logo_zggg_01.png" />
          </div>
        </div>
      </Transition>
    </div>
    <div
      class="footer"
      v-if="step >= 6"
      :style="{ top: step >= 7 ? '40vh' : '100vh' }"
    >
      <img
        class="footer-bg"
        src="/src/assets/images/app/footer/img_bg_dibu_01.png"
      />
      <div class="content">
        <div class="top">
          <Transition name="footer-logo">
            <img
              v-if="step >= 7"
              class="logo"
              src="/src/assets/images/app/footer/logo_bjdh_01.png"
            />
          </Transition>
          
          <div class="tool">
            <Transition name="footer-edit">
              <div v-if="step >= 7">
                <div class="edit">
                  <div>
                    <img src="/src/assets/images/app/footer/btn_xie_02.png" />
                    <span>Subscribe</span>
                  </div>
                </div>
              </div>
            </Transition>
            <Transition name="footer-top">
              <div v-if="step >= 7">
                <div class="to-top"><img src="/src/assets/images/app/footer/top.png" /></div>
              </div>
            </Transition>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <div class="col">
              <Transition name="row-one">
                <div class="row" v-if="step >= 7">
                  <div>Newsletter</div>
                  <div style="color: #03f0bb">Newsletter</div>
                </div>
              </Transition>
              <Transition name="row-two">
                <div class="row" v-if="step >= 7">
                  <div>Contact us</div>
                  <div style="color: #03f0bb">Contact us</div>
                </div>
              </Transition>
              <Transition name="row-three">
                <div class="row" v-if="step >= 7">
                  <div>Press</div>
                  <div style="color: #03f0bb">Press</div>
                </div>
              </Transition>
            </div>
            <div class="col">
              <Transition name="row-one">
                <div class="row" v-if="step >= 7">
                  <div>Multimedia</div>
                  <div style="color: #03f0bb">Multimedia</div>
                </div>
              </Transition>
              <Transition name="row-two">
                <div class="row" v-if="step >= 7">
                  <div>Events</div>
                  <div style="color: #03f0bb">Events</div>
                </div>
              </Transition>
              <Transition name="row-three">
                <div class="row" v-if="step >= 7">
                  <div>Publications</div>
                  <div style="color: #03f0bb">Publications</div>
                </div>
              </Transition>
              <Transition name="row-four">
                <div class="row" v-if="step >= 7">
                  <div>Partners</div>
                  <div style="color: #03f0bb">Partners</div>
                </div>
              </Transition>
            </div>
            <div class="col">
              <Transition name="row-one">
                <div class="row" v-if="step >= 7">
                  <div>Acessibility</div>
                  <div style="color: #03f0bb">Acessibility</div>
                </div>
              </Transition>
              <Transition name="row-two">
                <div class="row" v-if="step >= 7">
                  <div>Cookie Pilicy</div>
                  <div style="color: #03f0bb">Cookie Pilicy</div>
                </div>
              </Transition>
              <Transition name="row-three">
                <div class="row" v-if="step >= 7">
                  <div>privacy Policy</div>
                  <div style="color: #03f0bb">privacy Policy</div>
                </div>
              </Transition>
              <Transition name="row-four">
                <div class="row" v-if="step >= 7">
                  <div>Terms and Condhions</div>
                  <div style="color: #03f0bb">Terms and Condhions</div>
                </div>
              </Transition>
            </div>
          </div>
          <div class="follow">
            <Transition name="follow-title">
              <div class="title" v-if="step >= 7">Follow us</div>
            </Transition>
            <div class="follow-brand">
              <Transition name="logo-tt">
                <div v-if="step >= 7">
                  <img src="/src/assets/images/app/footer/icon_logo_tt_01.png" />
                </div>
              </Transition>
              <Transition name="logo-fb">
                <div v-if="step >= 7">
                  <img src="/src/assets/images/app/footer/icon_logo_fb_01.png" />
                </div>
              </Transition>
              <Transition name="logo-yl">
                <div v-if="step >= 7">
                  <img src="/src/assets/images/app/footer/icon_logo_yl_01.png" />
                </div>
              </Transition>
              <Transition name="logo-yt">
                <div v-if="step >= 7">
                  <img src="/src/assets/images/app/footer/icon_logo_yt_01.png" />
                </div>
              </Transition>
              <Transition name="logo-email">
                <div v-if="step >= 7">
                  <img src="/src/assets/images/app/footer/icon_logo_email_01.png" />
                </div>
              </Transition>
              <Transition name="logo-ins">
                <div v-if="step >= 7">
                  <img src="/src/assets/images/app/footer/icon_logo_ins_01.png" />
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
      <Transition name="footer-tips">
        <div class="tips" v-if="step >= 7">
          Copyrlght 2024 Beijing Club Inc,.All Rlghts Rserved.
        </div>
      </Transition>
      
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, onMounted, onBeforeUnmount } from "vue";
import { debounce } from "/src/utils/throttle";

import swiperImage1 from "./assets/images/app/swiper/1.png";
import swiperImage2 from "./assets/images/app/swiper/2.png";

const loadFlag = ref(false)
const header = ref(true);
const optionsMore = ref(0);
const step = ref(0);
const multimedia = ref();
const login = ref(false);
const programs = ref();
const videoPlay = ref(false);
const publications = ref();
const publicationsScroll = ref(0);
const eventsPublications = ref();
const eventsPublicationsValue = ref(0);
const publicationsScrollDom = ref();
const publicationsViewlDom = ref();
const videoDom = ref();
const share = ref(0);
let letterX = ref(10)
let letterY = ref(10)
const letter = ref()

onMounted(() => {
  videoDom.value.play();
  loadFlag.value = true
});

watch(
  () => step,
  () => {
    eventsPublicationsValue.value = 0;
  }
);

const programsMouseMove = (event) => {
  console.log(`鼠标位置：X=${event.clientX}, Y=${event.clientY}`);
  letter.value.style.transform = `translateX(${(event.clientX - window.innerWidth / 2) / 5}px) translateY(${(event.clientY - window.innerHeight / 2) / 5}px)`
}

const headerMouseover = () => {
  login.value = false;
};

const swiperData = reactive({
  current: 0,
  list: [
    {
      image: swiperImage1,
    },
    {
      image: swiperImage2,
    },
  ],
});

const swiperChange = () => {
  if (swiperData.current === swiperData.list.length - 1) {
    swiperData.current = 0;
  } else {
    swiperData.current++;
  }
};

const eventsScroll = (event) => {
  eventsPublicationsValue.value = eventsPublications.value.scrollTop;
};

const handleWheel = (event) => {
  if (event.deltaY > 0) {
    // if (eventsPublicationsValue.value === window.innerHeight && publicationsScroll.value > publicationsScrollDom.value.offsetWidth - publicationsViewlDom.value.offsetWidth) {
    //   publicationsScroll.value -= 10
    //   return
    // }

    if (
      (step.value === 4 &&
        eventsPublicationsValue.value !== window.innerHeight) ||
      step.value === 7
    ) {
      return;
    }

    debounce(() => {
      step.value++;
      header.value = false;
    }, 100)();
  } else {
    // if (step.value === 4 && publicationsScroll.value < 0) {
    //   publicationsScroll.value += 10
    //   event.preventDefault()
    //   return
    // } else
    if (
      step.value !== 4 ||
      (step.value === 4 && !eventsPublicationsValue.value)
    ) {
      debounce(() => {
        if (step.value) {
          step.value--;
          header.value = true;
        }
      }, 100)();
    }
  }
};

const draggable = ref(null);
const draggableStep = ref(null);
let isDragging = false;
let startX, startY;

const startDrag = (event) => {
  isDragging = true;
  startX = event.clientX - draggable.value.offsetLeft;
  startY = event.clientY - draggable.value.offsetTop;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
};

const onDrag = (event) => {
  if (isDragging) {
    if (
      event.clientX - startX > 1 ||
      publicationsScrollDom.value.offsetWidth > draggable.value.offsetWidth ||
      event.clientX - startX <
        publicationsScrollDom.value.offsetWidth - draggable.value.offsetWidth
    ) {
      return;
    }
    draggable.value.style.left = `${event.clientX - startX}px`;
    draggableStep.value.style.left = `${event.clientX - startX}px`;
  }
};

const stopDrag = () => {
  isDragging = false;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
};

onMounted(() => {
  draggable.value.style.position = "absolute";
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
});
</script>

<style lang="scss" scoped>
@import "./styles/app.scss";
</style>
