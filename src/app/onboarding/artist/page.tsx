
import {
  BookOpen,
  HelpCircle,
  User,
  CheckCircle,
  Book,
  BookCopy,
  Mountain,
  ScrollText,
  ArrowRight,
  Edit,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ArtistOnboardingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-border bg-white dark:bg-surface-dark px-6 lg:px-10 py-3">
        <div className="flex items-center justify-between whitespace-nowrap mx-auto max-w-[800px] w-full">
          <div className="flex items-center gap-3 text-foreground">
            <div className="size-8 flex items-center justify-center rounded bg-primary/10 dark:bg-primary/20 text-primary">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em]">
              AfriStory
            </h2>
          </div>
          <Button
            variant="secondary"
            className="h-10 px-4 text-sm font-bold"
          >
            Save &amp; Exit
          </Button>
        </div>
      </header>
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-8 px-4 sm:px-6">
          <div className="flex w-full max-w-[800px] flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-end justify-between gap-6">
                <p className="text-base font-medium leading-normal text-foreground">
                  Step 1 of 4: Artist Profile
                </p>
                <span className="text-sm font-medium text-primary">
                  25% Completed
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: '25%' }}
                ></div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm sm:p-10">
              <div className="mb-8 flex flex-col gap-2 border-b pb-6">
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-[32px]">
                  Artist Information
                </h1>
                <p className="text-sm font-normal leading-normal text-muted-foreground sm:text-base">
                  Complete your profile to start publishing on AfriStory Pro or
                  Draft. Establish your presence.
                </p>
              </div>
              <form className="flex flex-col gap-8">
                <div className="flex flex-col items-center gap-8 rounded-xl border border-dashed border-border bg-background p-4 sm:flex-row">
                  <div className="group relative cursor-pointer">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4iNlsb7T4-Gs0eP21CcpjRhpZzZt6ZiBhqt55uvT_Gsf_AKN1kjjFqMnp4aikIKxQ9c7VL3i-RBZRQVVmiTbccp7l6SApzInEgwkLFznO19CQAzzUSqNaNUtPwk2CczXgC8xTlSCl3c4crnTfxpkF2kWi9Kuyub-jsXYuRDEvH67FcP_KzYLc2zhkfMnu_RSZrrPGHPbJ7ZeUyxrMw6s7MTmdu0GUTmeWrngP77keb45dIBHVF2op-2UtBfh7WYZBbo8PXRNhKd_a"
                      alt="Abstract colorful artistic avatar placeholder"
                      width={128}
                      height={128}
                      className="h-32 w-32 rounded-full ring-4 ring-card shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <Edit className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-3 text-center sm:items-start sm:text-left">
                    <div>
                      <p className="text-lg font-bold leading-tight text-foreground">
                        Profile Picture
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Accepts JPG, PNG or GIF. Max size of 5MB.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button type="button">Upload New</Button>
                      <Button variant="secondary" type="button">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label
                      className="text-sm font-medium leading-normal text-foreground"
                      htmlFor="artist-name"
                    >
                      Professional Name / Pseudonym{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                        <User className="h-5 w-5" />
                      </div>
                      <Input
                        id="artist-name"
                        placeholder="e.g. Kwame Anansi"
                        type="text"
                        defaultValue="Kwame Anansi"
                        className="h-12 pl-10 pr-10"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-green-500">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-medium leading-normal text-foreground">
                      Primary Artistic Genre{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: 'Comics', icon: <Book className="h-4 w-4" /> },
                        { label: 'Novel', icon: <BookCopy className="h-4 w-4" /> },
                        { label: 'Manga', icon: <Mountain className="h-4 w-4" /> },
                        { label: 'Folklore', icon: <ScrollText className="h-4 w-4" /> },
                      ].map((genre, index) => (
                        <label key={genre.label} className="cursor-pointer">
                          <input
                            type="radio"
                            name="genre"
                            className="peer sr-only"
                            defaultChecked={index === 0}
                          />
                          <div className="flex items-center gap-2 rounded-lg border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent/50 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary">
                            {genre.icon}
                            {genre.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <div className="flex items-center justify-between">
                      <label
                        className="text-sm font-medium leading-normal text-foreground"
                        htmlFor="bio"
                      >
                        Short Biography
                      </label>
                      <span className="text-xs text-muted-foreground">
                        0/150 characters
                      </span>
                    </div>
                    <Textarea
                      id="bio"
                      placeholder="Tell your story briefly..."
                      rows={4}
                      className="resize-none"
                    />
                    <p className="text-xs text-muted-foreground/70">
                      This will be displayed on your public artist card.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col-reverse items-center gap-4 border-t pt-6 sm:flex-row">
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full sm:w-auto"
                  >
                    Skip for now
                  </Button>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto sm:ml-auto"
                    size="lg"
                  >
                    <span>Save Profile</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
