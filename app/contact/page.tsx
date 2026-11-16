
                {/* Location */}
                <StaggerItem direction={isRTL ? "right" : "left"} className={clsx("flex items-start gap-6 group", isRTL && "flex-row-reverse text-end")}>
                  <div className="p-4 bg-surface rounded-full group-hover:bg-accent/10 transition-colors">
                    <MapPin className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className={clsx("font-serif font-bold text-xl text-foreground mb-1", isRTL && "font-arabic")}>{t.contact.details.hq}</h3>
                    <address className={clsx("text-muted font-normal not-italic leading-relaxed max-w-[200px]", isRTL && "font-arabic")}>
                      {COMPANY.address[lang]}
                    </address>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Contact Form */}
            <AnimatedSection direction="up" className="bg-surface p-8 md:p-12 border border-line rounded-sm shadow-xl shadow-line h-fit">
              <h3 className={clsx("font-serif font-bold text-2xl text-foreground mb-6", isRTL && "text-start font-arabic")}>{t.contact.form.title}</h3>
              
              {submitted ? (
                <div className="bg-surface-2 p-8 text-center rounded-sm border border-line">
                  <h4 className={clsx("text-accent font-serif font-bold text-xl mb-3", isRTL && "font-arabic")}>{t.contact.form.successTitle}</h4>
                  <p className="text-muted font-normal text-sm">
                    {t.contact.form.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className={clsx("text-xs font-bold uppercase tracking-widest text-muted block", isRTL && "text-start")}>
                        {t.contact.form.fullNameCompany}
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        required 
                        className={clsx("w-full bg-surface-2 border border-line px-4 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors text-foreground font-normal", isRTL && "text-end")}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className={clsx("text-xs font-bold uppercase tracking-widest text-muted block", isRTL && "text-start")}>
                        {t.contact.form.email}
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className={clsx("w-full bg-surface-2 border border-line px-4 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors text-foreground font-normal", isRTL && "text-end")}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="division" className={clsx("text-xs font-bold uppercase tracking-widest text-muted block", isRTL && "text-start")}>
                      {t.contact.form.division}
                    </label>
                    <select 
                      id="division" 
                      required
                      className={clsx("w-full bg-surface-2 border border-line px-4 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors text-foreground font-normal appearance-none", isRTL && "text-start pr-10")}
                    >
                      <option value="">{t.contact.form.selectDivision}</option>
                      <option value="tours">{t.nav.tours}</option>
                      <option value="events">{t.nav.events}</option>
                      <option value="facility-services">{t.nav.facilityServices}</option>
                      <option value="uniforms">{t.nav.uniforms}</option>
                      <option value="medical-uniforms">{lang === "ar" ? "الزي الطبي" : "Medical Uniforms"}</option>
                      <option value="auto-parts">{t.nav.machineryAutoParts}</option>
                      <option value="commodities">{t.nav.commodities}</option>
                      <option value="other">{t.common.other}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className={clsx("text-xs font-bold uppercase tracking-widest text-muted block", isRTL && "text-start")}>
                      {t.contact.form.message}
                    </label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className={clsx("w-full bg-surface-2 border border-line px-4 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors text-foreground font-normal resize-none", isRTL && "text-end")}
                    ></textarea>
                  </div>

                  <div className={clsx("pt-2 flex", isRTL && "justify-end")}>
                    <Turnstile
                      siteKey="0x4AAAAAACul__dWFbvMuQKG"
                      onSuccess={(token) => setToken(token)}
                      options={{ size: "normal", theme }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting || !token}
                    className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-background font-medium uppercase tracking-widest text-sm py-4 rounded-sm transition-colors mt-6 flex justify-center items-center"
                  >
                    {isSubmitting ? t.contact.form.submitting : t.contact.form.send}
                  </button>
                </form>
              )}
            </AnimatedSection>
            
          </div>
        </div>
      </section>
    </div>
  );
}
