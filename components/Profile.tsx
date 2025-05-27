'use client'
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SampleUser from "@/components/SampleUser";
import PortFolio from "@/components/PortFolio";
import Link from "next/link";
import Reviews from "@/components/Reviews";
import Banner from "@/components/Banner";
import Connect from "@/components/Connect";
import CustomSite from "@/components/CustomSite";
import Categories from "@/components/Categories";
import Information from "@/components/Information";

export default function Profile() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const bannerY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const bannerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const bannerTextVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut"
            }
        }
    };

    const consultationVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            y: -2,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        tap: {
            scale: 0.98
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="min-h-screen bg-gray-100 flex items-center justify-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.div
                className="max-w-3xl lg:max-w-full w-full bg-white shadow-lg overflow-hidden"
                variants={itemVariants}
                whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
            >
                {/* Banner Section with Parallax */}
                <motion.div
                    className="h-[300px] lg:h-[600px] bg-gray-800 relative overflow-hidden"
                    style={{ y: bannerY, opacity: bannerOpacity }}
                >
                    <Banner/>

                    {/* Enhanced Consultation Section */}
                    <Link href="tel:010-3055-4972">
                        <motion.div
                            className="absolute z-[10] right-2 sm:right-6 md:right-8 lg:right-12 bottom-2 sm:bottom-16 md:bottom-14 lg:bottom-12"
                            variants={consultationVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <motion.div
                                className="flex flex-col justify-center items-center rounded-lg border backdrop-blur-sm bg-black/30
                                          px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-12 lg:py-6 gap-2 md:gap-3 lg:gap-4
                                          transition-all duration-300"
                                whileHover={{
                                    backgroundColor: "rgba(0,0,0,0.4)",
                                    borderColor: "rgba(255,255,255,0.3)"
                                }}
                            >
                                <motion.h1
                                    className="text-xs sm:text-base md:text-lg lg:text-2xl text-white font-medium"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    지금바로 상담받아보세요
                                </motion.h1>
                                <motion.button
                                    className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 py-1 md:py-1.5 bg-white
                                             transition-colors duration-200 shadow-md"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <h1 className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium">연락하기</h1>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </Link>

                    <Connect/>

                    <motion.div
                        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900"
                        variants={bannerTextVariants}
                    >
                        <motion.h1
                            className="text-xl md:text-3xl font-bold text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            김지섭
                        </motion.h1>
                        <motion.p
                            className="text-sm md:text-xl text-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Web/App Developer
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Content Sections with Staggered Animations */}
                <motion.div
                    className="p-6"
                    variants={containerVariants}
                >
                    {/* Custom Site Section */}
                    <motion.div
                        className="my-12 lg:my-16"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="text-xl font-bold text-gray-800 mb-4"
                            variants={headerVariants}
                        >
                            가게 성장을 위한 맞춤 웹사이트
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <CustomSite/>
                        </motion.div>
                    </motion.div>

                    {/* Categories Section */}
                    <motion.div
                        className="my-12 lg:my-16"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="text-xl font-bold text-gray-900 mb-4"
                            variants={headerVariants}
                        >
                            맞춤 제작 가능
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Categories/>
                        </motion.div>
                    </motion.div>

                    {/* FAQ Section */}
                    <motion.div
                        className="my-12 lg:my-16"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="text-xl font-bold text-gray-900 mb-4"
                            variants={headerVariants}
                        >
                            자주 묻는 질문
                        </motion.h2>
                        <motion.div
                            className="text-sm text-gray-700 mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            온라인 매장은 처음이라 잘 모르시나요? 통신판매업 등록부터 온라인 결제, 관리자 페이지 제작, SEO 최적화까지 원스톱으로 도와드립니다.
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Reviews/>
                        </motion.div>
                    </motion.div>

                    {/* Portfolio Section */}
                    <motion.div
                        className="my-12 lg:my-16"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <PortFolio/>
                        </motion.div>
                    </motion.div>

                    {/* Sample User Section */}
                    <motion.div
                        className="my-12 lg:my-16"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <SampleUser/>
                        </motion.div>
                    </motion.div>

                    {/* Information Section */}
                    <motion.div
                        className="border-t pt-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Information/>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};