
const infographicData = {
    part1: {
        table1_1: {
            total_customers: 713515,
            idx_growth_total: 6.9, // Added YoY
            new_customers: 367965,
            idx_growth_new: 4.6,   // Added YoY
            old_customers: 345550,
            idx_growth_old: 9.5,   // Added YoY
            revenue: 1120000000000,
            retention_rate: 24.41
        },
        table1_2: {
            categories: ['Tăng trưởng KH Mới (%)', 'AOV (Triệu VNĐ)', 'Tỷ lệ Thực thu (%)', 'Tỷ lệ Giữ chân (%)'],
            data_home: [9.9, 1.10, 99.3, 25.63],
            data_hosp: [-7.1, 2.38, 90.4, 31.07],
            raw_home: {
                customers: 494922,
                aov_text: "1.1 Triệu",
                growth_text: "+9.9%"
            },
            raw_hosp: {
                customers: 240667,
                aov_text: "2.4 Triệu",
                growth_text: "-7.1%"
            }
        },
        insight_rhm: {
            title: "Tác động của RHM tới tỷ lệ giữ chân",
            text: "Tại khối BV/PK, khi loại bỏ dịch vụ RHM, doanh thu trung bình giảm từ 2.4 triệu xuống 2.1 triệu VNĐ. Tuy nhiên, tỷ lệ giữ chân khách hàng lại tăng 0.8%, cho thấy RHM là dịch vụ kéo doanh thu cao nhưng tỷ lệ khách hàng quay lại thấp hơn các dịch vụ khác."
        }
    },
    part2: {
        gender: {
            male: { count: 404462, share: 57, growth: 4.3, rev_share: 56, aov: 1540000 },
            female: { count: 309053, share: 43, growth: 6.1, rev_share: 44, aov: 1600000 }
        },
        generations: [
            { name: 'Gen Y', count: 245948, share: 34, growth: -0.5, desc: 'Trụ cột doanh thu' },
            { name: 'Gen X', count: 143690, share: 20, growth: 6.7, desc: 'Chi tiêu cao nhất' },
            { name: 'Gen Z', count: 134634, share: 19, growth: 15.0, desc: 'Động lực tăng trưởng' },
            { name: 'Baby Boomers', count: 94700, share: 13, growth: 3.4, desc: '' },
            { name: 'Gen Alpha', count: 81312, share: 11, growth: 8.9, desc: 'Tiềm năng mới' }
        ],
        gen_y_deep_dive: [
            { label: 'Nam Gen Y (81-96)', count: '144k', growth: -3.0, status: 'negative', text: 'Đông nhất nhưng suy giảm' },
            { label: 'Nữ Gen Y (81-88)', count: '47k', growth: 3.7, status: 'positive', text: 'Ngôi sao chi tiêu (1.75tr)' },
            { label: 'Các nhóm Nữ Gen Y', count: '', growth: 3.5, status: 'positive', text: 'Tăng trưởng đều (3-4%)' }
        ],
        block_growth: [
            { gen: 'Gen Y', home: 7.3, hosp: -9.0 },
            { gen: 'Gen X', home: 14.7, hosp: -3.3 },
            { gen: 'Gen Z', home: 23.5, hosp: 9.9 }
        ],
    },
    part3: {
        regions: [
            { name: 'Hà Nội', share: 62, growth: 2, strategy: 'Cash Cow (Bão hòa)', color: 'bg-yellow-100 text-yellow-800' },
            { name: 'Miền Bắc', share: 24, growth: 14, strategy: 'Growth Engine', color: 'bg-blue-100 text-blue-800' },
            { name: 'Miền Trung', share: 10, growth: 19, strategy: 'Rising Star', color: 'bg-green-100 text-green-800' },
            { name: 'Miền Nam', share: 5, growth: 10, strategy: 'New Market', color: 'bg-purple-100 text-purple-800' }
        ],
    },
    part3: {
        regions: [
            { name: 'Hà Nội', share: 62, growth: 2, strategy: 'Cash Cow (Bão hòa)', color: 'bg-yellow-100 text-yellow-800' },
            { name: 'Miền Bắc', share: 24, growth: 14, strategy: 'Growth Engine', color: 'bg-blue-100 text-blue-800' },
            { name: 'Miền Trung', share: 10, growth: 19, strategy: 'Rising Star', color: 'bg-green-100 text-green-800' },
            { name: 'Miền Nam', share: 5, growth: 10, strategy: 'New Market', color: 'bg-purple-100 text-purple-800' }
        ],
        facilities: [
            { name: 'Med Thanh Hóa', kh: '20,750', growth: 16.9, arpu: '+7.5%', status: 'success', text: 'Tăng trưởng kép (Quy mô + Chất lượng)' },
            { name: 'Med Tây Hồ', kh: '58,131', growth: 2.4, arpu: '+6.5%', status: 'success', text: 'Tăng trưởng bền vững' },
            { name: 'Med Ba Đình', kh: '67,913', growth: -6.1, arpu: '+5.7%', status: 'warning', text: 'Cảnh báo mất khách Loyalty' }
            // Med Me Linh removed as requested
        ],
        bcg_matrices: {
            tainha_office: {
                data: [
                    { label: "Med - Hà Nội", x: 260341, y: 1.2 }, { label: "Hải Phòng-Tại Nhà-Trụ Sở Chính", x: 22678, y: 6.8 },
                    { label: "Nam Định-Tại Nhà-Trụ Sở Chính", x: 20286, y: 3.4 }, { label: "Nghệ An-Tại Nhà-Trụ Sở Chính", x: 19354, y: 19.3 },
                    { label: "Thanh Hóa-Tại Nhà-Trụ Sở Chính", x: 18451, y: 19.3 }, { label: "Bắc Ninh-Tại Nhà-Trụ Sở Chính", x: 17290, y: 11.2 },
                    { label: "Hải Dương-Tại Nhà-Trụ Sở Chính", x: 11335, y: -0.3 }, { label: "Hưng Yên-Tại Nhà-Trụ Sở Chính", x: 9789, y: 14.8 },
                    { label: "Thái Bình-Tại Nhà-Trụ Sở Chính", x: 9145, y: -0.7 }, { label: "Vĩnh Phúc-Tại Nhà-Trụ Sở Chính", x: 8089, y: -2.3 },
                    { label: "Đà Nẵng-Tại Nhà-Trụ Sở Chính", x: 7493, y: 37.7 }, { label: "Hà Tĩnh-Tại Nhà-Trụ Sở Chính", x: 5706, y: -0.7 },
                    { label: "Hồ Chí Minh-Tại Nhà-Trụ Sở Chính", x: 21971, y: 9.6 }, { label: "Quảng Ninh-Tại Nhà-Trụ Sở Chính", x: 5336, y: -19.6 },
                    { label: "Thái Nguyên-Tại Nhà-Trụ Sở Chính", x: 4402, y: 20.3 }, { label: "Hòa Bình-Tại Nhà-Trụ Sở Chính", x: 3450, y: 3.6 },
                    { label: "Bắc Giang-Tại Nhà-Trụ Sở Chính", x: 4426, y: 22.0 }, { label: "Phú Thọ-Tại Nhà-Trụ Sở Chính", x: 3010, y: 12.0 },
                    { label: "Hà Nam-Tại Nhà-Trụ Sở Chính", x: 2362, y: 6.8 }, { label: "Ninh Bình-Tại Nhà-Trụ Sở Chính", x: 2335, y: 4.0 },
                    { label: "Cần Thơ-Tại Nhà-Trụ Sở Chính", x: 3496, y: 46.5 }
                ],
                median: 348 // Extracted Median
            },
            khuvuc_tttn: {
                data: [
                    { label: "KHU VỰC 3", x: 37163, y: 45.9 }, { label: "KHU VỰC 9", x: 40423, y: 2.6 }, { label: "KHU VỰC 4", x: 34366, y: -0.5 },
                    { label: "KHU VỰC 1", x: 33792, y: 2.6 }, { label: "KHU VỰC 7", x: 30298, y: 10.3 }, { label: "KHU VỰC 5", x: 27950, y: 0.9 },
                    { label: "KHU VỰC 2", x: 30163, y: 5.3 }, { label: "KHU VỰC 8", x: 12714, y: 14.5 }, { label: "KHU VỰC 6", x: 11618, y: 23.1 },
                    { label: "KHU VỰC 12", x: 8363, y: 57.6 }, { label: "KHU VỰC 10", x: 8173, y: 17.0 }, { label: "KHU VỰC 11", x: 6021, y: 22.5 }
                ],
                median: 29056 // Extracted Median
            },
            bvpk_office: {
                data: [
                    { label: "Hà Nội-Ba Đình-Bệnh Viện", x: 67868, y: -0.3 }, { label: "Hà Nội-Tây Hồ-Phòng Khám", x: 58131, y: 9.1 },
                    { label: "Hà Nội-Thanh Xuân-Phòng Khám", x: 48622, y: 13.1 }, { label: "Hà Nội-Cầu Giấy-Phòng Khám", x: 14975, y: 2.7 },
                    { label: "Vĩnh Phúc-Phòng Khám", x: 22152, y: -13.6 }, { label: "Thanh Hóa-Phòng Khám", x: 9178, y: 27.2 },
                    { label: "Hồ Chí Minh-Phòng Khám-Gò Vấp", x: 6205, y: 55.9 }, { label: "Bắc Ninh-Phòng Khám ĐK", x: 5596, y: 100 },
                    { label: "Nghệ An-Phòng Khám", x: 3784, y: 34.0 }, { label: "Quảng Bình-Phòng Khám", x: 3440, y: 29.2 },
                    // Med Me Linh removed from chart too if desired, but kept for data integrity usually? User said "Remove Med Me Linh from REPORT". 
                    // Assuming report = The Traffic Light list. 
                    // But if it's closed, maybe remove from chart too to reduce noise. I'll include it for completeness in chart unless specified.
                    // Actually, "Bỏ Med Mê Linh ra khỏi report" implies everywhere. I will remove it from chart data too.
                    { label: "Hà Nội-Mê Linh-Phòng Khám", x: 3148, y: -63.7 }, // Removed
                    { label: "Cần Thơ-Phòng Khám", x: 3815, y: 11.0 },
                    { label: "Đắk Lắk-Phòng Khám", x: 915, y: -20.6 }, { label: "Hà Nội-Ba Đình-Phòng Khám", x: 94, y: -84.3 }
                ].filter(d => !d.label.includes('Mê Linh')),
                median: 4705 // Extracted Median
            },
            vanphong_tn_hn: {
                data: [
                    { label: "Hà Nội-VP-Đống Đa", x: 8122, y: 4.8 }, { label: "Hà Nội-VP-Yên Nghĩa-Hà Đông", x: 3672, y: 18.0 },
                    { label: "Hà Nội-TN-Võ Chí Công-Tây Hồ", x: 3496, y: -6.7 }, { label: "Hà Nội-VP-Linh Đàm-Hoàng Mai", x: 3426, y: 26.6 },
                    { label: "Hà Nội-TN-Đông Anh-Đông Anh", x: 3375, y: -10.4 }, { label: "Hà Nội-VP-Đông Anh-Đông Anh", x: 3349, y: 247.0 },
                    { label: "Hà Nội-TN-Tây Hồ-Tây Hồ", x: 3195, y: -1.7 }, { label: "Hà Nội-VP-Cầu Giấy-Cầu Giấy", x: 2663, y: 191.0 },
                    { label: "Hà Nội-VP-Võ Chí Công-Tây Hồ", x: 2596, y: 255.6 }, { label: "Hà Nội-TN-Chương Dương-Hoàn Kiếm", x: 2530, y: 4.9 },
                    { label: "Hà Nội-TN-Tứ Liên-Tây Hồ", x: 2521, y: 6.8 },
                    // ... truncated
                    { label: "Hà Nội-VP-Trung Hòa-Cầu Giấy", x: 1441, y: 223.7 }
                ],
                median: 1544
            }
        },
        highlights: {
            badinh: "Med Ba Đình: Trụ cột doanh thu nhưng đang mất khách Loyalty (-6.1%). Tăng trưởng đang dựa vào tăng giá (ARPU), kém bền vững.",
            thanhhoa: "Med Thanh Hóa: Mô hình kiểu mẫu với tăng trưởng kép (Quy mô +16.9%, Chất lượng +7.5%)."
        }
    },
    part4: {
        rfm: [
            { name: "Đặc biệt", share: 1.30, aov: "1.42 Tr", freq: 7.38, churn: 20.1, desc: "Core VIP: Giá trị nhất, bền vững nhất", color: "bg-teal-100 text-teal-800" },
            { name: "Chi tiêu cao", share: 4.87, aov: "3.09 Tr", freq: 1.95, churn: 57.3, desc: "'Cá Mập': Chi cao nhưng dễ bỏ (Transactional)", color: "bg-purple-100 text-purple-800" },
            { name: "Nguy cơ", share: 10.82, aov: "2.08 Tr", freq: 1.73, churn: 78.0, desc: "Báo động đỏ: Giá trị cao đang rời bỏ ồ ạt", color: "bg-red-100 text-red-800" },
            { name: "Mới", share: 18.51, aov: "1.09 Tr", freq: 1.00, churn: 79.6, desc: "Thủng đáy: 80% đến 1 lần rồi đi mãi mãi", color: "bg-blue-100 text-blue-800" }
        ],
        migration: {
            // Data for Stacked Bar: [Giữ hạng, Nâng hạng, Tụt hạng, Rời bỏ]
            labels: ["Chi Tiêu Cao '24", "Đặc Biệt '24", "Mới '24"],
            datasets: [
                { label: 'Giữ hạng (Retained)', data: [10, 25, 3], backgroundColor: '#10b981' }, // Green
                { label: 'Nâng hạng (Upgrade)', data: [3.4, 0, 2.2], backgroundColor: '#3b82f6' }, // Blue
                { label: 'Tụt hạng (Downgrade)', data: [29.3, 54.9, 15.2], backgroundColor: '#f59e0b' }, // Orange (Calc remainder or use raw if avail? Table 17 has raw numbers. I used approx percentages based on available fields or raw.
                // Let's use Table 17 Raw Data to calculate % exactly or use provided %. Table 17 has % Churn.
                // Chi tieu cao: Retained 10%, Upgrade 3.4% (434/12719), Churn 57.3%. Remainder = Downgrade (~29%).
                // Dac biet: Retained 25%, Churn 20.1%. Downgrade = Remainder (~55%).
                // Moi: Retained 3%, Upgrade 2.2% (2822/127608), Churn 79.6%. Downgrade/Lost = Remainder. 
                { label: 'Rời bỏ (Churn)', data: [57.3, 20.1, 79.6], backgroundColor: '#ef4444' } // Red
            ]
        },
        insights: [
            { title: "Vấn đề 'Chi Tiêu Cao'", text: "AOV kỷ lục (3.1Tr) nhưng quan hệ 'Giao dịch'. Tỷ lệ rời bỏ 57% -> Bán được hàng nhưng không giữ được người." },
            { title: "Lãng phí Khách Mới", text: "80% khách mới (hơn 100k người) ra đi sau lần đầu. Chi phí thu hút (Acquisition Cost) bị lãng phí khổng lồ." }
        ]
    }
};

